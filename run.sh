#!/bin/bash
set -e  # Exit on error

echo "=== Starting LaunchPad deployment ==="
echo "$(date): Deployment initiated"

# Tự động phát hiện nền tảng
if [[ $(uname -m) == "arm64" ]]; then
    BUILD_PLATFORM="linux/arm64"
    # Thêm các biến môi trường đặc biệt cho ARM64
    ADDITIONAL_ARGS="--build-arg REBUILD_NATIVE=true"
    echo "Detected ARM64 architecture, using $BUILD_PLATFORM platform"
else
    BUILD_PLATFORM="linux/amd64"
    ADDITIONAL_ARGS=""
    echo "Detected AMD64 architecture, using $BUILD_PLATFORM platform"
fi

# Build Next.js container
echo "=== Building Next.js container ==="
docker build --platform $BUILD_PLATFORM --memory=2g --cpu-quota=200000 -t next-app:latest ./next
if [ $? -ne 0 ]; then
    echo "ERROR: Next.js build failed"
    exit 1
fi

# Build Strapi container
echo "=== Building Strapi container ==="
docker build --platform $BUILD_PLATFORM --memory=2g --cpu-quota=200000 $ADDITIONAL_ARGS -t strapi-app:latest ./strapi
if [ $? -ne 0 ]; then
    echo "ERROR: Strapi build failed"
    exit 1
fi

# Start containers with updated environment variables
echo "=== Starting containers ==="
docker compose --env-file ./.env up -d
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start containers"
    exit 1
fi

# Verify container status
echo "=== Checking container status ==="
docker ps
docker compose ps

# Container and image cleanup
echo "=== Cleaning up old containers and images ==="
docker container prune --filter "until=24h" -f
docker image prune --filter "until=24h" -f

echo "=== Deployment completed successfully ==="
echo "$(date): Deployment completed"

# Save logs to file for artifacts
docker compose logs > job-logs.txt