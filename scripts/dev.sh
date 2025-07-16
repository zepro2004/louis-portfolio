#!/bin/bash

set -e

# Ensure we're running from the project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

CONTAINER_NAME="louis-portfolio-dev"
PORT=${1:-5173}

echo "🚀 Starting development container..."

# Stop and remove existing container if it exists
if docker ps -a --format 'table {{.Names}}' | grep -Eq "^${CONTAINER_NAME}\$"; then
    echo "🛑 Stopping existing container..."
    docker stop "$CONTAINER_NAME" 2>/dev/null || true
    docker rm "$CONTAINER_NAME" 2>/dev/null || true
fi

# Check if we need to build/rebuild the development image
check_dev_image_freshness() {
    # Check if image exists
    if ! docker images louis-portfolio-dev --format 'table {{.Repository}}' | grep -q louis-portfolio-dev; then
        echo "missing"
        return
    fi
    
    # Use a timestamp file to track when we last built successfully
    TIMESTAMP_FILE="scripts/.last_dev_build_timestamp"
    
    # Find the most recent modification time of key files that affect dev environment
    LATEST_SOURCE=$(find package*.json docker/Dockerfile.dev vite.config.js -type f -printf '%T@\n' 2>/dev/null | sort -n | tail -1 | cut -d. -f1)
    
    if [ -z "$LATEST_SOURCE" ]; then
        # Fallback: check package.json modification time
        LATEST_SOURCE=$(stat --format='%Y' package.json 2>/dev/null || echo "0")
    fi
    
    # Check if timestamp file exists and is newer than source changes
    if [ -f "$TIMESTAMP_FILE" ]; then
        LAST_BUILD=$(cat "$TIMESTAMP_FILE" 2>/dev/null || echo "0")
        if [ "$LAST_BUILD" -gt "$LATEST_SOURCE" ]; then
            echo "fresh"
            return
        fi
    fi
    
    echo "outdated"
}

DEV_IMAGE_STATUS=$(check_dev_image_freshness)

case $DEV_IMAGE_STATUS in
    "missing")
        echo "📦 Building development image (image not found)..."
        docker build -f docker/Dockerfile.dev -t louis-portfolio-dev .
        echo "$(date +%s)" > scripts/.last_dev_build_timestamp
        ;;
    "outdated")
        echo "🔄 Rebuilding development image (configuration changed)..."
        docker build -f docker/Dockerfile.dev -t louis-portfolio-dev .
        echo "$(date +%s)" > scripts/.last_dev_build_timestamp
        ;;
    "fresh")
        echo "✨ Using existing louis-portfolio-dev image (up to date)"
        ;;
esac

# Run the development container with volume mounting for hot reloading
echo "🔧 Running development container on port $PORT..."
docker run -d \
    -p "$PORT:5173" \
    --name "$CONTAINER_NAME" \
    -v "$(pwd)/src:/app/src" \
    -v "$(pwd)/public:/app/public" \
    -v "$(pwd)/index.html:/app/index.html" \
    -v "$(pwd)/vite.config.js:/app/vite.config.js" \
    louis-portfolio-dev

echo "✅ Development container started successfully!"
echo "🌐 Access your development server at: http://localhost:$PORT"
echo "🔥 Hot reloading is enabled - changes to src/ will be reflected immediately"
echo "📋 Container name: $CONTAINER_NAME"
echo ""
echo "Useful commands:"
echo "  docker logs -f $CONTAINER_NAME   # View live logs"
echo "  docker stop $CONTAINER_NAME      # Stop container"
echo "  docker restart $CONTAINER_NAME   # Restart container"
