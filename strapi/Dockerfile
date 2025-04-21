# Stage 1: Build Strapi app
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

# Stage 2: Serve Strapi app
FROM node:18
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 1337
USER node
CMD ["yarn", "start"]