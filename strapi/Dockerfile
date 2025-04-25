# Creating multi-stage build for production
FROM node:18-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git python3 > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV NODE_OPTIONS="--max-old-space-size=2048"

WORKDIR /opt/
COPY package.json yarn.lock ./
COPY scripts/ ./scripts/

# Tăng cường độ ổn định khi cài đặt packages
RUN yarn global add node-gyp esbuild
RUN yarn config set network-timeout 900000 -g
RUN yarn config set registry https://registry.npmjs.org/

# Thử sử dụng flag --network-timeout và --legacy-peer-deps
RUN yarn install --production --network-timeout 900000 --non-interactive --legacy-peer-deps || \
    (sleep 3 && yarn install --production --network-timeout 900000 --non-interactive --legacy-peer-deps) || \
    (sleep 5 && yarn install --production --network-timeout 900000 --non-interactive --legacy-peer-deps)

# Add explicit rebuild of native modules if needed
RUN if [ -d "/opt/node_modules/better-sqlite3" ]; then cd /opt/node_modules/better-sqlite3 && yarn rebuild; fi

ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN yarn build

# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=1024"
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH=/opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["yarn", "start"]