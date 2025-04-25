# Build frontend and backend separately with resource limits and platform specification
# Tự động phát hiện nền tảng
if [[ $(uname -m) == "arm64" ]]; then
    BUILD_PLATFORM="linux/arm64"
    # Thêm các biến môi trường đặc biệt cho ARM64
    ADDITIONAL_ARGS="--build-arg REBUILD_NATIVE=true"
else
    BUILD_PLATFORM="linux/amd64"
    ADDITIONAL_ARGS=""
fi

# Sử dụng biến trong lệnh build
docker build --platform $BUILD_PLATFORM --memory=2g --cpu-quota=200000 -t next-app:latest ./next
docker build --platform $BUILD_PLATFORM --memory=2g --cpu-quota=200000 $ADDITIONAL_ARGS -t strapi-app:latest ./strapi

# Start containers with updated environment variables
docker compose --env-file ./.env up -d

# Container and image cleanup as before
docker container prune --filter "until=24h" -f
docker image prune --filter "until=24h" -f