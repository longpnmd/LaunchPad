# Stage 1: Build Next.js app
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile && yarn cache clean
RUN yarn build

# Stage 2: Serve Next.js app
FROM node:18
WORKDIR /app
COPY --from=builder /app /app
RUN yarn global add next
EXPOSE 3000
CMD ["yarn", "start"]