# Stage 1: Build Strapi app
FROM node:18-alpine AS builder
WORKDIR /app

# Set memory limits for Node.js
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Copy only package files first to leverage Docker caching
COPY package.json yarn.lock ./
COPY scripts/ ./scripts/

# Install dependencies with memory-optimized settings
RUN yarn install --frozen-lockfile --network-timeout 600000 \
    --prefer-offline \
    --production=false \
    --ignore-scripts \
    && yarn cache clean

# Copy only necessary files
COPY . .

# Run any needed scripts manually that were skipped with --ignore-scripts
# RUN node ./scripts/updateUuid.js || echo "Script not found or failed"

# Build with production optimization and memory limits
RUN NODE_ENV=production yarn build

# Stage 2: Serve Strapi app
FROM node:18-alpine
WORKDIR /app

# Set memory limits for production
ENV NODE_OPTIONS="--max-old-space-size=1024"

# Install production dependencies only with memory optimization
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile --network-timeout 300000 \
    --prefer-offline \
    --ignore-optional \
    && yarn cache clean

# Copy build from builder stage
COPY --from=builder /app/ ./

EXPOSE 1337

# Use a healthcheck to improve container monitoring
HEALTHCHECK --interval=30s --timeout=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:1337/admin/init || exit 1

# Start Strapi and run seed script
CMD ["sh", "-c", "yarn start & echo \"Waiting for Strapi to initialize...\" && until curl -s http://localhost:1337/admin/init > /dev/null; do sleep 5; done && echo \"Running seed script...\" && yarn seed && wait"]