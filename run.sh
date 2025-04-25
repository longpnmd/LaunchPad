# Build frontend and backend separately with resource limits and platform specification
docker build --platform linux/amd64 --memory=2g --cpu-quota=200000 -t next-app:latest ./next
docker build --platform linux/amd64 --memory=2g --cpu-quota=200000 -t strapi-app:latest ./strapi

# Start containers with updated environment variables
docker compose --env-file ./.env up -d

# Container and image cleanup as before
docker container prune --filter "until=24h" -f
docker image prune --filter "until=24h" -f