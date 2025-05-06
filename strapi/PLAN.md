# CRM Bất Động Sản với Strapi

## 1. Giới thiệu

Tài liệu này mô tả kế hoạch phát triển hệ thống CRM chuyên dụng cho ngành bất động sản sử dụng Strapi làm backend. Hệ thống được thiết kế để giúp các công ty bất động sản quản lý khách hàng, deals, tài sản và hoạt động theo dõi khách hàng một cách hiệu quả.

## 2. Yêu cầu hệ thống

### 2.1. Chức năng cơ bản
- Quản lý thông tin khách hàng
- Theo dõi giao dịch bất động sản
- Quản lý thông tin tài sản
- Hệ thống ghi chú linh hoạt
- Quản lý nhiệm vụ và nhắc nhở

### 2.2. Chức năng chăm sóc khách hàng
- Phân loại khách hàng theo giai đoạn (Lead, Warm, Hot, Active, v.v.)
- Tự động nhắc followup theo chu kỳ tùy chỉnh
- Phân cấp quản lý theo Agent

## 3. Thiết kế Content Types

### 3.1. User (Agent)
- Sử dụng module Users & Permissions plugin của Strapi
- Phân quyền theo vai trò Agent
- Quan hệ với Deal, Customer, Task

### 3.2. Customer (Khách hàng)
- Thông tin cơ bản: Họ tên, email, điện thoại, nguồn
- Liên kết với Stage để theo dõi trạng thái
- Liên kết với Agent phụ trách
- Có thể có nhiều Deals, nhiều Notes

### 3.3. Property (Bất động sản)
- Thông tin cơ bản: Tiêu đề, loại bất động sản, địa chỉ, giá, diện tích
- Thông tin chi tiết: Số phòng ngủ, số phòng tắm, mô tả
- Quản lý trạng thái: Có sẵn, đã bán, đang chờ cọc, v.v.
- Liên kết với Agent phụ trách
- Có nhiều Deals, nhiều Notes

### 3.4. Deal (Giao dịch)
- Liên kết giữa Customer, Property và Agent
- Theo dõi trạng thái giao dịch
- Quản lý giá trị và ngày giao dịch
- Có nhiều Notes

### 3.5. Note (Ghi chú)
- Thiết kế dạng polymorphic: có thể gán cho nhiều loại đối tượng
- Liên kết với Customer, Deal, Property, Task
- Người tạo ghi chú

### 3.6. Task (Công việc)
- Quản lý nhiệm vụ của Agent
- Liên kết với Deal
- Có thời hạn và trạng thái
- Có nhiều Notes

### 3.7. ClientStage (Giai đoạn khách hàng)
- Master data định nghĩa các giai đoạn khách hàng
- Quản lý chu kỳ follow-up tự động
- Mục đích và hướng dẫn tiếp cận cho từng giai đoạn

## 4. Chi tiết về Client Stage

Hệ thống phân loại khách hàng theo các giai đoạn cụ thể:

| Giai đoạn | Mục đích | Tập trung vào | Tự động theo dõi |
|-----------|----------|---------------|------------------|
| Lead | Lead đăng ký trên website nhưng chưa phản hồi các câu hỏi ban đầu | Value + Responsive | Không - Chuyển sang giai đoạn thích hợp sau khi kết nối |
| Warm | Đang giao tiếp nhưng chưa chắc chắn sẽ mua/bán | Value | 30 ngày |
| Hot | Khách hàng đang mua hoặc bán nhưng chưa ký thỏa thuận | Value + Conversion | 7 ngày |
| Active | Khách hàng đã ký thỏa thuận | Experience | Không - Tùy thuộc vào khách hàng |
| Pending | Khách hàng có offer được chấp nhận với các điều kiện | Communication + Experience | Không - Tùy thuộc vào khách hàng |
| Firm | Khách hàng đang chờ nhận tài sản | Communication + Experience | 14 ngày |
| Super Connectors & Friends | Những người quen nhiều người trong thành phố | Mối quan hệ cá nhân sâu sắc | 60 ngày |
| SOI A | Người không có ý định giao dịch nhưng thân thiết | Quan hệ cá nhân | 90 ngày |
| SOI B | Người không có ý định giao dịch | Quan hệ kinh doanh | 180 ngày |
| Support | Nhà cung cấp dịch vụ và doanh nghiệp hỗ trợ | Không | 180 ngày |
| Archive | Không có ý định giữ liên lạc nhưng vẫn nhận tự động hóa | Không | Không |
| Dead | Không theo dõi và không nhận tự động hóa | Không | Không |

## 5. Quản lý quyền hạn

### 5.1. Agent
- Chỉ thấy và quản lý được khách hàng, giao dịch, và nhiệm vụ được gán cho họ
- Không thể truy cập dữ liệu của Agent khác
- Giới hạn quyền tạo mới, sửa, xóa trên những dữ liệu thuộc về họ

### 5.2. Admin
- Toàn quyền quản lý tất cả dữ liệu trong hệ thống
- Phân công Agent phụ trách khách hàng, giao dịch, nhiệm vụ

## 6. Kế hoạch triển khai

### 6.1. Tạo cấu trúc dự án Strapi
- Khởi tạo dự án Strapi mới hoặc sử dụng dự án hiện có
- Cấu hình các plugin cần thiết

### 6.2. Triển khai Content Types
- Tạo schema cho tất cả Content Types đã định nghĩa
- Thiết lập quan hệ giữa các Content Types

### 6.3. Thiết lập quyền hạn
- Tạo vai trò Agent trong hệ thống Strapi
- Giới hạn quyền truy cập cho các vai trò

### 6.4. Triển khai controllers
- Tạo controllers tùy chỉnh để lọc dữ liệu dựa trên Agent đăng nhập hiện tại
- Đảm bảo Agent chỉ thấy dữ liệu của họ

### 6.5. Tự động hóa
- Triển khai tính năng tự động follow-up dựa trên chu kỳ của Stage
- Cấu hình Cron Job để kiểm tra và gửi thông báo

### 6.6. Import dữ liệu mẫu
- Tạo dữ liệu ClientStage mẫu
- Tạo các Agent mẫu với vai trò phù hợp

### 6.7. Kiểm thử hệ thống
- Kiểm tra tính năng phân quyền Agent
- Kiểm tra chức năng followup tự động
- Xác nhận tính liên kết giữa các đối tượng
