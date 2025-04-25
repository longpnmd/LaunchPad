# Stage 1: Build Strapi app
FROM node:18 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
# Copy the scripts directory before installing dependencies
COPY scripts/ ./scripts/
RUN yarn install --frozen-lockfile && yarn cache clean
COPY . .
RUN yarn build

# Stage 2: Serve Strapi app
FROM node:18
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 1337

# Start Strapi and run seed script
CMD ["sh", "-c", "yarn start & echo \"Waiting for Strapi to initialize...\" && until curl -s http://localhost:1337/admin/init > /dev/null; do sleep 5; done && echo \"Running seed script...\" && yarn seed && wait"]