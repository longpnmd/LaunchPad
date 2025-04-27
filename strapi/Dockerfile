# Creating multi-stage build for production
FROM node:18-alpine AS build
# Cài đặt các công cụ cần thiết và sqlite
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git python3 sqlite sqlite-dev > /dev/null 2>&1
ARG NODE_ENV=production
ARG REBUILD_NATIVE=false
ENV NODE_ENV=${NODE_ENV}
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /opt/
COPY package.json yarn.lock ./
COPY scripts/ ./scripts/

# Tăng cường độ ổn định khi cài đặt packages
RUN yarn global add node-gyp esbuild
RUN yarn config set network-timeout 1800000 -g # Tăng timeout lên 30 phút
RUN yarn config set registry https://registry.npmjs.org/

# Cài đặt dependencies với chiến lược tối ưu
RUN yarn install --network-timeout 1800000 --non-interactive || \
    (sleep 5 && yarn install --network-timeout 1800000 --non-interactive) || \
    (sleep 10 && yarn install --network-timeout 1800000 --non-interactive --legacy-peer-deps)

ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
# Sửa lại lệnh build để không truyền tham số network-timeout trực tiếp vào strapi build
RUN yarn config set network-timeout 1800000 && yarn build

# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev sqlite curl
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=2048"
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH=/opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["yarn", "start"]