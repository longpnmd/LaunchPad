#!/bin/bash

# Script chạy seeder dữ liệu mẫu
# Đường dẫn: /Users/longpn/Workspaces/LaunchPad/strapi/seed-data.sh

echo "===== Chạy Seeder Dữ Liệu Mẫu CRM Bất Động Sản ====="

# Đảm bảo file seed-mock-data.ts đã được tạo và đường dẫn đúng
if [ ! -f "src/bootstrap/seed-mock-data.ts" ]; then
  echo "Không tìm thấy file seed-mock-data.ts!"
  exit 1
fi

# Kiểm tra xem đã import seedMockData trong src/index.ts chưa
if ! grep -q "seedMockData" src/index.ts; then
  echo "Cần thêm import và gọi seedMockData trong src/index.ts"
  exit 1
fi

# Cảnh báo và xác nhận từ người dùng với đếm ngược
echo ""
echo "⚠️  CẢNH BÁO ⚠️"
echo "----------------------------------------------------"
echo "Quá trình seed sẽ XÓA TẤT CẢ DỮ LIỆU hiện có trong database bao gồm:"
echo "- Notes"
echo "- Tasks"
echo "- Deals"
echo "- Customers"
echo "- Properties"
echo "- Client Stages"
echo "----------------------------------------------------"
echo ""
echo "Trả lời 'y' để tiếp tục, hoặc đợi 3 giây để tự động hủy..."

# Đếm ngược 3 giây
read -t 3 -p "Bạn có chắc chắn muốn tiếp tục? (y/N): " confirm

# Kiểm tra phản hồi
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo -e "\nĐã hủy quá trình seed dữ liệu."
  exit 0
fi

# Thiết lập biến môi trường để xóa dữ liệu
export SEED_DELETE_EXISTING_DATA=true
echo "Đã đặt SEED_DELETE_EXISTING_DATA=true"

# Build lại Strapi để áp dụng các thay đổi
echo "Build lại Strapi..."
npm run build

# Khởi động Strapi để chạy seeder
# echo "Khởi động Strapi để chạy seeder..."
# npm run develop

echo "===== Quá trình seed hoàn tất! ====="