#!/bin/bash

set -e

# Ensure we're running from the project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

CONTAINER_NAME="louis-portfolio"
PORT=${1:-3000}

echo "🚀 Starting production container..."

# Stop and remove existing container if it exists
if docker ps -a --format 'table {{.Names}}' | grep -Eq "^${CONTAINER_NAME}\$"; then
    echo "🛑 Stopping existing container..."
    docker stop "$CONTAINER_NAME" 2>/dev/null || true
    docker rm "$CONTAINER_NAME" 2>/dev/null || true
fi

# Check if we need to build/rebuild the production image
check_image_freshness() {
    # Check if image exists
    if ! docker images louis-portfolio:latest --format 'table {{.Repository}}' | grep -q "^louis-portfolio$"; then
        echo "missing"
        return
    fi
    
    # Use a timestamp file to track when we last built successfully
    TIMESTAMP_FILE="scripts/.last_build_timestamp"
    
    # Find the most recent modification time of key source files
    LATEST_SOURCE=$(find src/ public/ package*.json index.html docker/Dockerfile nginx.conf -type f -printf '%T@\n' 2>/dev/null | sort -n | tail -1 | cut -d. -f1)
    
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

IMAGE_STATUS=$(check_image_freshness)

case $IMAGE_STATUS in
    "missing")
        echo "📦 Building production image (image not found)..."
        docker build -f docker/Dockerfile -t louis-portfolio:latest .
        echo "$(date +%s)" > scripts/.last_build_timestamp
        ;;
    "outdated")
        echo "🔄 Rebuilding production image (source code has changed)..."
        docker build -f docker/Dockerfile -t louis-portfolio:latest .
        echo "$(date +%s)" > scripts/.last_build_timestamp
        ;;
    "fresh")
        echo "✨ Using existing louis-portfolio:latest image (up to date)"
        ;;
esac

# Run the production container
echo "🌟 Running production container on port $PORT..."
docker run -d \
    -p "$PORT:80" \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    louis-portfolio:latest

echo "✅ Production container started successfully!"
echo "🌐 Access your portfolio at: http://localhost:$PORT"
echo "📋 Container name: $CONTAINER_NAME"
echo ""
echo "Usage examples:"
echo "  scripts/prod.sh           # Auto-detects if rebuild needed"
echo "  scripts/prod.sh 8080      # Use port 8080"
echo ""
echo "Useful commands:"
echo "  docker logs $CONTAINER_NAME     # View logs"
echo "  docker stop $CONTAINER_NAME     # Stop container"
echo "  docker restart $CONTAINER_NAME  # Restart container"
