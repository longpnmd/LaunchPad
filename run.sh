docker compose build --compress --build-arg NODE_ENV=production
docker compose down
docker compose --env-file ./.env up -d
docker container prune -f || true
docker image prune -f || true
docker system prune -f || true