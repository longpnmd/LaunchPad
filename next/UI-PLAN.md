# Kế Hoạch Phát Triển UI Quản Lý CRM Bất Động Sản

## Tổng quan

Dựa trên kế hoạch tích hợp ProComponents với hệ thống CRM Bất động sản, sau đây là kế hoạch chi tiết phát triển UI cho các module trong phần admin:

## 1. Quản lý khách hàng (/admin/customers)

### 1.1. Cấu trúc thư mục
```
/app/admin/customers/
  page.tsx                 - Trang danh sách khách hàng
  /[id]/                   - Chi tiết khách hàng theo ID
    page.tsx               - Trang chi tiết khách hàng
  /new/                    - Tạo khách hàng mới
    page.tsx               - Form tạo mới
  components/              - Components dùng riêng cho module khách hàng
    CustomerForm.tsx       - Form thêm/sửa khách hàng
    CustomerTable.tsx      - Bảng danh sách khách hàng
    CustomerStageChart.tsx - Biểu đồ giai đoạn khách hàng
    CustomerFilter.tsx     - Bộ lọc khách hàng
    NotesSection.tsx       - Phần ghi chú cho khách hàng
```

### 1.2. Chức năng chính
- **Trang danh sách khách hàng**:
  - Sử dụng `ProTable` hiển thị danh sách với các cột: Họ tên, Email, SĐT, Nguồn, Giai đoạn, Agent phụ trách
  - Bộ lọc theo giai đoạn, nguồn, agent
  - Tìm kiếm theo tên, email, SĐT
  - Các hành động: Xem chi tiết, Chỉnh sửa, Xóa, Thêm ghi chú nhanh
  
- **Trang chi tiết khách hàng**:
  - `ProCard` với thông tin cơ bản khách hàng
  - Tab giao dịch liên quan (sử dụng `ProTable`)
  - Tab ghi chú (sử dụng `ProList`)
  - Tab lịch sử liên hệ và nhắc nhở
  - Biểu đồ tiến trình theo giai đoạn

## 2. Quản lý bất động sản (/admin/properties)

### 2.1. Cấu trúc thư mục
```
/app/admin/properties/
  page.tsx                  - Trang danh sách bất động sản
  /[id]/                    - Chi tiết bất động sản theo ID
    page.tsx                - Trang chi tiết bất động sản
  /new/                     - Tạo bất động sản mới
    page.tsx                - Form tạo mới
  components/               - Components riêng cho module bất động sản
    PropertyForm.tsx        - Form thêm/sửa bất động sản
    PropertyTable.tsx       - Bảng danh sách bất động sản
    PropertyGallery.tsx     - Thư viện ảnh bất động sản
    PropertyFilter.tsx      - Bộ lọc bất động sản
    PropertyMap.tsx         - Hiển thị vị trí trên bản đồ
```

### 2.2. Chức năng chính
- **Trang danh sách bất động sản**:
  - `ProTable` hiển thị với các cột: Tiêu đề, Loại BĐS, Vị trí, Giá, Diện tích, Trạng thái
  - Bộ lọc theo loại BĐS, trạng thái, khoảng giá, diện tích
  - Chế độ xem dạng lưới (gallery) và dạng bảng
  - Tìm kiếm theo tiêu đề, vị trí
  
- **Trang chi tiết bất động sản**:
  - Thư viện ảnh với chức năng zoom
  - Thông tin chi tiết sử dụng `ProDescriptions`
  - Bản đồ vị trí (tích hợp Google Maps/OpenStreetMap)
  - Tab giao dịch liên quan
  - Tab ghi chú và lịch sử

## 3. Quản lý giao dịch (/admin/deals)

### 3.1. Cấu trúc thư mục
```
/app/admin/deals/
  page.tsx                 - Trang danh sách giao dịch
  /[id]/                   - Chi tiết giao dịch theo ID
    page.tsx               - Trang chi tiết giao dịch
  /new/                    - Tạo giao dịch mới
    page.tsx               - Form tạo mới
  components/              - Components riêng cho module giao dịch
    DealsForm.tsx          - Form thêm/sửa giao dịch
    DealsTable.tsx         - Bảng danh sách giao dịch
    DealsPipeline.tsx      - Hiển thị pipeline giao dịch
    DealsFilter.tsx        - Bộ lọc giao dịch
    DealsKanbanBoard.tsx   - Bảng Kanban cho quản lý giao dịch
```

### 3.2. Chức năng chính
- **Trang danh sách giao dịch**:
  - `ProTable` hiển thị với các cột: Tiêu đề, Trạng thái, Giá trị, Ngày, Khách hàng, BĐS, Agent
  - Chuyển đổi giữa chế độ bảng và chế độ Kanban
  - Bộ lọc theo trạng thái, agent, khoảng giá trị
  - Tìm kiếm theo tiêu đề, khách hàng
  
- **Trang chi tiết giao dịch**:
  - Thông tin giao dịch sử dụng `ProDescriptions`
  - Timeline tiến trình giao dịch
  - Phần ghi chú và trao đổi
  - Thông tin liên kết (khách hàng, bất động sản, agent)
  - Các thao tác nhanh: cập nhật trạng thái, thêm ghi chú

## 4. Quản lý công việc (/admin/tasks)

### 4.1. Cấu trúc thư mục
```
/app/admin/tasks/
  page.tsx                 - Trang danh sách công việc
  /[id]/                   - Chi tiết công việc theo ID
    page.tsx               - Trang chi tiết công việc
  /new/                    - Tạo công việc mới
    page.tsx               - Form tạo mới
  components/              - Components riêng cho module công việc
    TasksForm.tsx          - Form thêm/sửa công việc
    TasksTable.tsx         - Bảng danh sách công việc
    TasksCalendar.tsx      - Hiển thị công việc dạng lịch
    TasksFilter.tsx        - Bộ lọc công việc
    TasksKanbanBoard.tsx   - Bảng Kanban cho quản lý công việc
```

### 4.2. Chức năng chính
- **Trang danh sách công việc**:
  - `ProTable` hiển thị với các cột: Tiêu đề, Mô tả, Deadline, Người được giao, Trạng thái, Giao dịch liên quan
  - Chuyển đổi giữa chế độ bảng, lịch và Kanban
  - Bộ lọc theo trạng thái, người được giao, khoảng thời gian
  - Các thao tác nhanh: đánh dấu hoàn thành, hủy, gán lại
  
- **Trang chi tiết công việc**:
  - Thông tin công việc sử dụng `ProDescriptions`
  - Phần ghi chú và bình luận
  - Thông tin liên kết (giao dịch liên quan, khách hàng)
  - Đếm ngược thời gian (nếu có deadline)

## 5. Quản lý cấu hình hệ thống (/admin/settings)

### 5.1. Cấu trúc thư mục
```
/app/admin/settings/
  page.tsx                     - Trang chính quản lý cài đặt
  /user-management/            - Quản lý người dùng
    page.tsx                   - Danh sách người dùng
    /[id]/                     - Chi tiết người dùng
      page.tsx                 - Trang chi tiết và chỉnh sửa
  /client-stages/              - Quản lý giai đoạn khách hàng
    page.tsx                   - Danh sách và sắp xếp các giai đoạn
  /system/                     - Cài đặt hệ thống
    page.tsx                   - Các cấu hình chung
  components/                  - Components riêng cho module cài đặt
    UserForm.tsx               - Form thêm/sửa người dùng
    StageForm.tsx              - Form thêm/sửa giai đoạn khách hàng
    SystemSettingsForm.tsx     - Form cài đặt hệ thống
    PermissionsTable.tsx       - Bảng quản lý quyền
```

### 5.2. Chức năng chính
- **Quản lý người dùng**:
  - `ProTable` hiển thị danh sách người dùng với các cột: Tên, Email, Vai trò, Trạng thái
  - Form thêm/chỉnh sửa người dùng
  - Phân quyền chi tiết sử dụng `DragSortingTable`
  
- **Quản lý giai đoạn khách hàng**:
  - `DragSortingTable` cho phép kéo thả sắp xếp thứ tự giai đoạn
  - Cấu hình chi tiết cho mỗi giai đoạn: tên, mô tả, thời gian follow-up, hướng dẫn tiếp cận
  
- **Cài đặt hệ thống**:
  - Cấu hình thông báo tự động
  - Tùy chỉnh các trường thông tin
  - Cài đặt tích hợp (email, tin nhắn)

## 6. Components dùng chung

### 6.1 Layout Components
```
/components/layout/
  AdminLayout.tsx           - Layout chung cho admin
  PageHeader.tsx            - Header trang với breadcrumbs và title
  ActionHeader.tsx          - Header với các nút action
```

### 6.2 Common Components
```
/components/common/
  StageTag.tsx              - Hiển thị trạng thái với màu sắc tương ứng
  NotesForm.tsx             - Form thêm ghi chú áp dụng cho nhiều entity
  RelationSelect.tsx        - Field select với khả năng tìm kiếm quan hệ
  FilterDrawer.tsx          - Drawer chứa bộ lọc nâng cao
  EntityTimeline.tsx        - Timeline cho các sự kiện của entity
```

## 7. Lộ trình triển khai

1. **Phase 1: Thiết lập cấu trúc và cấu hình**
   - Tạo layout admin chung
   - Cấu hình ProComponents
   - Triển khai components dùng chung

2. **Phase 2: Quản lý khách hàng**
   - Triển khai trang danh sách và chi tiết khách hàng
   - Triển khai các forms và chức năng quản lý

3. **Phase 3: Quản lý bất động sản**
   - Triển khai trang danh sách và chi tiết bất động sản
   - Triển khai các forms và chức năng quản lý

4. **Phase 4: Quản lý giao dịch**
   - Triển khai trang danh sách và chi tiết giao dịch
   - Triển khai board Kanban và pipeline

5. **Phase 5: Quản lý công việc**
   - Triển khai trang danh sách và chi tiết công việc
   - Triển khai chế độ xem lịch và Kanban

6. **Phase 6: Quản lý cài đặt**
   - Triển khai quản lý người dùng và phân quyền
   - Triển khai quản lý giai đoạn khách hàng
   - Triển khai các cài đặt hệ thống

## 8. Responsive Design

- Áp dụng thiết kế responsive cho tất cả các trang
- Layout thích nghi cho tablet và mobile
- Ưu tiên chức năng quan trọng trên màn hình nhỏ
- Tối ưu bảng và biểu đồ cho thiết bị di động

## 9. Tích hợp API

- Sử dụng React Query để quản lý trạng thái server và caching
- Tách phần gọi API thành các custom hooks riêng biệt
- Xử lý lỗi và loading states đồng nhất
- Quản lý phân trang và giới hạn dữ liệu phù hợp

## 10. Bảo mật và phân quyền

- Kiểm tra quyền truy cập cho từng module
- Ẩn/hiện chức năng dựa trên vai trò người dùng
- Giới hạn dữ liệu hiển thị phù hợp với quyền

Kế hoạch này cung cấp cấu trúc cơ bản để phát triển UI cho hệ thống CRM bất động sản, tận dụng các thành phần của Ant Design ProComponents để tạo giao diện chuyên nghiệp và hiệu quả.