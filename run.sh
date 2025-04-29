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
# Giảm số lượng jobs song song và giới hạn CPU bằng cpulimit hoặc nice
CPU_LIMIT=75  # Giới hạn 75% CPU
PARALLEL_JOBS=1  # Số lượng công việc chạy song song
BUILD_NICE=10  # Độ ưu tiên (nice level), cao hơn = ít ưu tiên hơn

# Build Next.js container with resource limits
echo "=== Building Next.js container ==="
nice -n $BUILD_NICE docker build \
    --platform $BUILD_PLATFORM \
    --memory=2g \
    --cpu-quota=150000 \
    --cpu-period=200000 \
    -t next-app:latest ./next

if [ $? -ne 0 ]; then
    echo "ERROR: Next.js build failed"
    exit 1
fi

# Build Strapi container with resource limits
echo "=== Building Strapi container ==="
nice -n $BUILD_NICE docker build \
    --platform $BUILD_PLATFORM \
    --memory=2g \
    --cpu-quota=150000 \
    --cpu-period=200000 \
    $ADDITIONAL_ARGS \
    -t strapi-app:latest ./strapi

# Start containers with updated environment variables
echo "=== Starting containers ==="
echo "=== Starting base services ==="
docker compose -f docker-compose.base.yml --env-file ./.env up -d --remove-orphans
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start base services"
    exit 1
fi

echo "=== Starting application services ==="
docker compose -f docker-compose.services.yml --env-file ./.env up -d --remove-orphans
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start application services"
    exit 1
fi
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start containers"
    exit 1
fi

# Verify container status - thêm thời gian chờ giữa các lần kiểm tra
echo "=== Checking container status ==="
sleep 2
docker ps

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