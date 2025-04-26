#!/bin/bash
set -e  # Exit on error

echo "=== Starting LaunchPad deployment ==="
echo "$(date): Deployment initiated"

# # Chuẩn bị thư mục và thiết lập quyền truy cập
# echo "=== Setting up directories and permissions ==="

# # Lấy UID và GID hiện tại
# export USER_ID=$(id -u)
# export GROUP_ID=$(id -g)
# echo "Using UID:GID = $USER_ID:$GROUP_ID"

# # Tạo thư mục cần thiết
# mkdir -p ./n8n_data
# mkdir -p ./postgres/init
# mkdir -p ./letsencrypt
# mkdir -p ./config

# # Cài đặt quyền cho các thư mục
# sudo chown -R $USER_ID:$GROUP_ID ./n8n_data
# sudo chown -R $USER_ID:$GROUP_ID ./postgres
# sudo chown -R $USER_ID:$GROUP_ID ./letsencrypt
# sudo chown -R $USER_ID:$GROUP_ID ./config

# # Đặc biệt xử lý file acme.json
# if [ -f "./letsencrypt/acme.json" ]; then
#     sudo chown $USER_ID:$GROUP_ID ./letsencrypt/acme.json
#     chmod 600 ./letsencrypt/acme.json
# else
#     touch ./letsencrypt/acme.json
#     chmod 600 ./letsencrypt/acme.json
# fi

# # Tự động phát hiện nền tảng
# if [[ $(uname -m) == "arm64" ]]; then
#     BUILD_PLATFORM="linux/arm64"
#     # Thêm các biến môi trường đặc biệt cho ARM64
#     ADDITIONAL_ARGS="--build-arg REBUILD_NATIVE=true"
#     echo "Detected ARM64 architecture, using $BUILD_PLATFORM platform"
# else
#     BUILD_PLATFORM="linux/amd64"
#     ADDITIONAL_ARGS=""
#     echo "Detected AMD64 architecture, using $BUILD_PLATFORM platform"
# fi

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