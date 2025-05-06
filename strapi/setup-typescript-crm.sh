#!/bin/bash

# Script triển khai CRM bất động sản cho Strapi với TypeScript
# Đường dẫn: /Users/longpn/Workspaces/LaunchPad/strapi/setup-typescript-crm.sh

echo "===== Triển khai CRM Bất động sản trên Strapi với TypeScript ====="

# Đường dẫn tới thư mục dự án Strapi
STRAPI_DIR="/Users/longpn/Workspaces/LaunchPad/strapi"
cd "$STRAPI_DIR" || { echo "Không thể truy cập thư mục dự án Strapi"; exit 1; }

# Cấp quyền thực thi cho các script
chmod +x setup-schemas.sh
chmod +x setup-controllers.sh
chmod +x setup-routes-services.sh
chmod +x setup-bootstrap.sh

# Chạy script tạo schemas
./setup-schemas.sh

# Chạy script tạo controllers
./setup-controllers.sh

# Chạy script tạo routes & services
./setup-routes-services.sh

# Chạy script tạo bootstrap files
./setup-bootstrap.sh

echo "===== Thiết lập hoàn tất! ====="
echo "Bây giờ bạn cần build và restart Strapi:"
echo "cd ${STRAPI_DIR}"
echo "npm run build"
echo "npm run develop"