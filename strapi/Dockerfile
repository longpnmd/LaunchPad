# Stage 1: Build Strapi app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy only package files first to leverage Docker caching
COPY package.json yarn.lock ./
COPY scripts/ ./scripts/

# Install dependencies with explicit resource control
RUN yarn install --frozen-lockfile --network-timeout 600000 && yarn cache clean

# Copy only necessary files (exclude node_modules, tests, etc)
COPY ./src ./src
COPY ./public ./public
COPY ./config ./config
COPY ./.env* ./
COPY ./database ./database
COPY ./*.js ./

# Build with production optimization
RUN NODE_ENV=production yarn build

# Stage 2: Serve Strapi app
FROM node:18-alpine
WORKDIR /app

# Install production dependencies only
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile && yarn cache clean

# Copy build from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/config ./config
COPY --from=builder /app/public ./public
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/database ./database
COPY --from=builder /app/.env* ./
COPY --from=builder /app/*.js ./

EXPOSE 1337

# Use a healthcheck to improve container monitoring
HEALTHCHECK --interval=30s --timeout=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:1337/admin/init || exit 1

# Start Strapi and run seed script
CMD ["sh", "-c", "yarn start & echo \"Waiting for Strapi to initialize...\" && until curl -s http://localhost:1337/admin/init > /dev/null; do sleep 5; done && echo \"Running seed script...\" && yarn seed && wait"]