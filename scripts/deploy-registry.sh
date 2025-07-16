#!/bin/bash

set -e

# Ensure we're running from the project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

# Configuration
REGISTRY=${1:-"local"}  # local, dockerhub, github
USERNAME=${DOCKER_USERNAME:-"louisb01"}
IMAGE_NAME="louis-portfolio"
KEEP_IMAGES=${KEEP_IMAGES:-5}  # Number of timestamped images to keep locally

echo "🚀 Docker Registry Deployment Script"
echo "📍 Registry: $REGISTRY"
echo ""

# Function to check registry authentication
check_registry_auth() {
    local registry_type=$1
    echo "🔐 Verifying $registry_type authentication..."
    
    case $registry_type in
        "dockerhub")
            if ! docker info | grep -q "Username:"; then
                echo "❌ Not logged into Docker Hub."
                echo "💡 Please run: docker login"
                echo "   Use your Docker Hub username and password/token"
                exit 1
            fi
            echo "✅ Docker Hub authentication verified"
            ;;
        "github")
            # Check if we have GitHub Container Registry credentials
            local auth_file="$HOME/.docker/config.json"
            if [ -f "$auth_file" ] && grep -q "ghcr.io" "$auth_file"; then
                echo "✅ GitHub Container Registry credentials found"
            else
                echo "❌ Not logged into GitHub Container Registry."
                echo "💡 Please run: docker login ghcr.io"
                echo "   Username: your-github-username"
                echo "   Password: your-github-personal-access-token (with packages:write scope)"
                echo "   Token creation: GitHub → Settings → Developer settings → Personal access tokens"
                exit 1
            fi
            ;;
    esac
}

# Function to cleanup old images
cleanup_old_images() {
    local image_prefix=$1
    echo "🧹 Cleaning up old images (keeping latest $KEEP_IMAGES)..."
    
    # Get all timestamped images for this project, sorted by creation time
    local old_images=$(docker images --format "table {{.Repository}}:{{.Tag}}\t{{.CreatedAt}}" | \
                      grep "^$image_prefix:" | \
                      grep -E "[0-9]{8}-[0-9]{6}$" | \
                      sort -k2 -r | \
                      tail -n +$((KEEP_IMAGES + 1)) | \
                      awk '{print $1}')
    
    if [ -n "$old_images" ]; then
        echo "📦 Removing old images:"
        echo "$old_images" | while read -r image; do
            echo "  - $image"
            docker rmi "$image" 2>/dev/null || true
        done
    else
        echo "✅ No old images to clean up"
    fi
}

# Determine target registry and check authentication FIRST (before any building)
echo "📦 Configuring deployment target..."
case $REGISTRY in
    "dockerhub")
        IMAGE_TAG="$USERNAME/$IMAGE_NAME:latest"
        TIMESTAMPED_TAG="$USERNAME/$IMAGE_NAME:$(date +%Y%m%d-%H%M%S)"
        # Check authentication before building
        check_registry_auth "$REGISTRY"
        ;;
    "github")
        IMAGE_TAG="ghcr.io/$USERNAME/$IMAGE_NAME:latest"
        TIMESTAMPED_TAG="ghcr.io/$USERNAME/$IMAGE_NAME:$(date +%Y%m%d-%H%M%S)"
        # Check authentication before building
        check_registry_auth "$REGISTRY"
        ;;
    "local"|*)
        IMAGE_TAG="$IMAGE_NAME:latest"
        TIMESTAMPED_TAG="$IMAGE_NAME:$(date +%Y%m%d-%H%M%S)"
        echo "📋 Local build mode - no authentication needed"
        ;;
esac

# Build the image (only after auth is verified for registries)
echo "📦 Building image..."

# Build the images (suppress Docker warnings for cleaner output)
{ docker build -f docker/Dockerfile -t "$IMAGE_TAG" . 2>&1 | grep -v "WARNING: DOCKER_INSECURE_NO_IPTABLES_RAW" || true; } | cat
docker tag "$IMAGE_TAG" "$TIMESTAMPED_TAG"

echo "✅ Images built:"
echo "  - $IMAGE_TAG"
echo "  - $TIMESTAMPED_TAG"

# Push if not local (authentication already verified above)
if [ "$REGISTRY" != "local" ]; then
    echo "📤 Pushing to $REGISTRY..."
    echo "🚀 Uploading images..."
    
    { docker push "$IMAGE_TAG" 2>&1 | grep -v "WARNING: DOCKER_INSECURE_NO_IPTABLES_RAW" || true; } | cat
    { docker push "$TIMESTAMPED_TAG" 2>&1 | grep -v "WARNING: DOCKER_INSECURE_NO_IPTABLES_RAW" || true; } | cat
    
    echo "✅ Push complete!"
    echo ""
    echo "📋 Others can now pull with:"
    echo "  docker pull $IMAGE_TAG"
else
    echo "📋 Local build complete!"
fi

# Cleanup old images (only locally, never on registries)
if [ "$REGISTRY" = "local" ]; then
    cleanup_old_images "$IMAGE_NAME"
else
    # For registry pushes, clean up the local copies of the images we just pushed
    cleanup_old_images "$USERNAME/$IMAGE_NAME"
fi

echo ""
echo "🎉 Deployment ready!"
echo ""
echo "Usage examples:"
echo "  ./deploy-docker-registry.sh local              # Build locally (for testing registry deployment)"
echo "  ./deploy-docker-registry.sh dockerhub          # Build and push to Docker Hub"
echo "  ./deploy-docker-registry.sh github             # Build and push to GitHub Container Registry"
echo ""
echo "For local development, use instead:"
echo "  ./run-development.sh                           # Start development server"
echo "  ./run-production.sh                            # Test production build locally"
echo ""
echo "Environment variables:"
echo "  DOCKER_USERNAME=your-username                  # Override username"
echo "  KEEP_IMAGES=5                                  # Keep more old images (default: 5)"
