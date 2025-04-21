# Build container only if necessary
docker compose build --compress --build-arg NODE_ENV=production

# Stop containers without removing them
docker compose stop

# Start containers with updated environment variables
docker compose --env-file ./.env up -d

# Remove stopped containers older than 24 hours
docker container prune --filter "until=24h" -f

# Remove unused images older than 24 hours
docker image prune --filter "until=24h" -f