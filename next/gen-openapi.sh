#!/bin/bash
mkdir -p ./lib/api
npx swagger-typescript-api generate \
-p http://localhost:1337/content-api.yaml \
-o ./lib/services \
-n api-service.ts \
--modular false \
--http-client axios \
--axios
