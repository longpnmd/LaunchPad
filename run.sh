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

# Thiết lập giới hạn tài nguyên
# Điều chỉnh phù hợp cho VPS 4 vCPU, 4GB RAM
CPU_LIMIT=200    # Sử dụng tối đa 2 cores (200%)
PARALLEL_JOBS=2  # Cho phép 2 công việc chạy song song
BUILD_NICE=5     # Giảm nice level để tăng ưu tiên xây dựng

# Build Next.js container with resource limits
echo "=== Building Next.js container ==="
nice -n $BUILD_NICE docker build \
    --platform $BUILD_PLATFORM \
    --memory=2.5g \
    --memory-swap=3g \
    --cpu-quota=200000 \
    --cpu-period=100000 \
    -t next-app:latest ./next

if [ $? -ne 0 ]; then
    echo "ERROR: Next.js build failed"
    exit 1
fi

# Build Strapi container with resource limits
echo "=== Building Strapi container ==="
nice -n $BUILD_NICE docker build \
    --platform $BUILD_PLATFORM \
    --memory=2.5g \
    --memory-swap=3g \
    --cpu-quota=200000 \
    --cpu-period=100000 \
    $ADDITIONAL_ARGS \
    -t strapi-app:latest ./strapi

if [ $? -ne 0 ]; then
    echo "ERROR: Strapi build failed"
    exit 1
fi

# Create necessary directories and files if they don't exist
echo "=== Creating necessary directories and files ==="
[ -d ~/apps/letsencrypt ] || mkdir -p ~/apps/letsencrypt
[ -f ~/apps/letsencrypt/acme.json ] || touch ~/apps/letsencrypt/acme.json
[ -d ~/apps/next ] || mkdir -p ~/apps/next
[ -d ~/apps/strapi ] || mkdir -p ~/apps/strapi
[ -d ~/apps/strapi/public/uploads ] || mkdir -p ~/apps/strapi/public/uploads

# Start containers with updated environment variables
echo "=== Starting containers ==="
docker compose --env-file ./.env up -d --remove-orphans
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start containers"
    exit 1
fi

# Verify container status - thêm thời gian chờ giữa các lần kiểm tra
echo "=== Checking container status ==="
sleep 2
docker ps
sleep 1
docker compose ps

# Container and image cleanup - thực hiện tuần tự để giảm tải
echo "=== Cleaning up old containers and images ==="
echo "Cleaning unused containers..."
docker container prune --filter "until=24h" -f
sleep 2
echo "Cleaning unused images..."
docker image prune --filter "until=24h" -f

echo "=== Deployment completed successfully ==="
echo "$(date): Deployment completed"

# Save logs to file for artifacts
docker compose logs > job-logs.txt