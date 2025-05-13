#!/bin/bash
set -e

# Create output directory
mkdir -p ./lib/api
mkdir -p ./tmp

echo "Downloading OpenAPI specification..."
# Download the spec file first to avoid WASM issues with direct URL processing
curl -s "http://127.0.0.1:1337/full_documentation.json" -o ./tmp/openapi-spec.json || {
  echo "Error: Failed to download OpenAPI spec. Make sure your Strapi server is running at http://127.0.0.1:1337"
  exit 1
}

# Converting OpenAPI spec from JSON to YAML
echo "Converting OpenAPI spec from JSON to YAML..."
yq -p json -o yaml ./tmp/openapi-spec.json > ./tmp/openapi-spec.yaml

# Generate the API client using OpenAPI Generator
echo "Generating API client..."
npx @openapitools/openapi-generator-cli generate -c ./openapi-generator.yaml  --skip-validate-spec 
# npx @openapitools/openapi-generator-cli generate -c ./openapi-generator.yaml -i ./tmp/openapi-spec.yaml -g typescript-axios -o ./tmp --skip-validate-spec || {
#   echo "Error: Failed to generate API client. Please check your OpenAPI spec and configuration."
#   exit 1
# }


echo "API client generation completed"

