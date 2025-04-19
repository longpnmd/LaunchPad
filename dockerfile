# Stage 1: Build Next.js app
FROM node:18 AS nextjs-build
WORKDIR /app/next
COPY next/ .
RUN yarn install
RUN yarn build

# Stage 2: Build Strapi app
FROM node:18 AS strapi-build
WORKDIR /app/strapi
COPY strapi/ .
RUN yarn install
RUN yarn build

# Stage 3: Final image
FROM node:18
WORKDIR /app

# Copy built Next.js app
COPY --from=nextjs-build /app/next /app/next

# Copy built Strapi app
COPY --from=strapi-build /app/strapi /app/strapi

# Install PM2 to manage both apps
RUN yarn global add pm2

# Copy PM2 process configuration
COPY pm2.config.js /app/pm2.config.js

# Expose ports for both apps
EXPOSE 3000 1337

# Start both apps using PM2
CMD ["pm2-runtime", "pm2.config.js"]