# Phân Tích Chức Năng CRM Cho Frontend Next.js

Dựa trên kế hoạch CRM Strapi hiện có, tôi sẽ phân tích các chức năng cần triển khai trong phần frontend Next.js.

## Các Tính Năng Frontend CRM Cần Thiết

Để bổ sung cho backend Strapi đã được định nghĩa trong PLAN.md, frontend Next.js cần có:

### 1. Xác Thực & Quản Lý Người Dùng
- Giao diện đăng nhập/đăng ký cho Agent và Admin
- Quản lý hồ sơ người dùng
- Giao diện kiểm soát truy cập dựa trên vai trò (Agent và Admin)

### 2. Bảng Điều Khiển & Tổng Quan
- Bảng điều khiển chính hiển thị các chỉ số quan trọng
- Dòng thời gian hoạt động
- Nhắc nhở theo dõi dựa trên hệ thống tự động

### 3. Quản Lý Khách Hàng
- Danh sách khách hàng với bộ lọc và sắp xếp
- Xem chi tiết khách hàng với tất cả dữ liệu liên quan
- Giao diện quản lý giai đoạn (di chuyển khách hàng giữa các giai đoạn Lead → Warm → Hot → Active)
- Lập lịch và theo dõi tiếp cận khách hàng

### 4. Quản Lý Bất Động Sản
- Danh sách và chi tiết bất động sản
- Tìm kiếm và lọc bất động sản
- Quản lý hình ảnh bất động sản

### 5. Quản Lý Giao Dịch
- Hiển thị trực quan quy trình giao dịch
- Biểu mẫu tạo/chỉnh sửa giao dịch
- Giao diện theo dõi trạng thái

### 6. Hệ Thống Nhiệm Vụ & Theo Dõi
- Tạo và phân công nhiệm vụ
- Nhắc nhở thời hạn
- Cập nhật trạng thái nhiệm vụ
- Tích hợp với hệ thống theo dõi tự động

### 7. Ghi Chú & Liên Lạc
- Giao diện tạo ghi chú cho tất cả loại đối tượng
- Theo dõi lịch sử liên lạc

### 8. Báo Cáo & Phân Tích
- Bảng điều khiển hiệu suất cho các agent
- Phân tích quy trình giao dịch
- Chỉ số chuyển đổi khách hàng

## Đề Xuất Triển Khai

1. Tạo phần CRM riêng biệt trong ứng dụng Next.js (có thể đặt trong `/app/[locale]/crm/`)
2. Triển khai các dịch vụ API sử dụng React Query hoặc SWR để lấy dữ liệu từ Strapi
3. Thêm các component biểu mẫu sử dụng thư viện như React Hook Form
4. Tạo bố cục responsive cho tất cả màn hình CRM
5. Triển khai quản lý trạng thái phù hợp cho các biểu mẫu phức tạp
6. Đảm bảo hỗ trợ đa ngôn ngữ được duy trì trong toàn bộ giao diện CRM

# Kế Hoạch Tích Hợp ProComponents với Hệ Thống CRM Bất Động Sản

## 1. Tổng Quan Giải Pháp

Dựa trên kế hoạch CRM Strapi hiện có và các tính năng đã phân tích ở trên, giải pháp tích hợp toàn diện sau đây sẽ được áp dụng:

### 1.1. Kiến trúc tổng thể
- **Frontend**: Next.js ứng dụng với Ant Design ProComponents
- **Backend**: Strapi API đã được cấu hình
- **Authentication**: JWT kết hợp với quản lý phiên làm việc

### 1.2. Các thành phần chính của ProComponents sẽ sử dụng
- **ProLayout**: Layout tổng thể cho CRM
- **ProTable**: Hiển thị và quản lý dữ liệu dạng bảng (customers, properties, deals)
- **ProForm**: Forms nhập liệu cho tất cả các entity
- **ProList**: Hiển thị dữ liệu dạng danh sách (notes, tasks)
- **ProCard**: Hiển thị thông tin tóm tắt trên dashboard
- **ProDescriptions**: Hiển thị chi tiết từng entity

## 2. Cấu Trúc Thư Mục

```
/app
  /[locale]
    /(auth)
      /login
      /register
    /(dashboard) - Layout cho phần CRM
      /dashboard   - Trang chủ CRM
      /customers   - Quản lý khách hàng
      /properties  - Quản lý bất động sản
      /deals       - Quản lý giao dịch
      /tasks       - Quản lý công việc
      /settings    - (Admin only) Cấu hình hệ thống
    /(marketing) - Layout ban đầu cho landing pages
```

## 3 Tài liệu Kết Nối API Chuẩn Theo `@strapi/client`

### 1. Cài Đặt Thư Viện
```bash
npm install @strapi/client
```

### 2. Thiết Lập Kết Nối API
```javascript
import { createClient } from '@strapi/client';

const strapi = createClient('https://your-strapi-url.com/api', {
  token: null, // Chưa có token khi khởi tạo
});
```

### 3. Quy Trình Xác Thực (Auth & Login)

#### 3.1. Đăng Nhập (Login)
```javascript
await strapi.login({
  identifier: 'user@example.com',
  password: 'password123',
});
```

#### 3.2. Lấy JWT Token Sau Khi Login
```javascript
const token = strapi.token.get();
console.log('JWT Token:', token);
```

#### 3.3. Gọi API Đã Authenticated
```javascript
const articles = await strapi.find('articles');
```

### 4. Quy Trình Đăng Xuất (Logout)
```javascript
strapi.logout();
```

### 5. Quản Lý Token
- Sau khi đăng nhập, `strapi.token` sẽ lưu token tự động.
- Có thể lấy token bằng `strapi.token.get()`.
- Có thể set token thủ công bằng `strapi.token.set('your-token')`.

### 6. Các Lưu Ý
- **Token** sẽ tự động được thêm vào tất cả các request sau khi login.
- Không cần tự fetch hay quản lý `Authorization` headers.
- Thư viện `@strapi/client` hỗ trợ quản lý session và auth tiện lợi hơn fetch thô.

### 7. Tài Liệu Tham Khảo
- Strapi Client SDK: https://github.com/strapi/client

---

### ✅ Kế hoạch này đã cập nhật đúng chuẩn tài liệu chính thức.
### ✅ Phù hợp cho cả REST API public và private (yêu cầu login).
### ✅ Đã loại bỏ cách kết nối API thủ công, chuyển qua dùng SDK chuẩn.

## 4. Chi Tiết Triển Khai Theo Module

### 4.1. Module Dashboard

#### Components chính:
- **OverviewStatCards**: Hiển thị số liệu tổng quan (KPIs)
- **RecentActivityFeed**: Hiển thị hoạt động gần đây
- **UpcomingTasksList**: Danh sách nhiệm vụ sắp tới
- **PerformanceChart**: Biểu đồ hiệu suất theo thời gian
- **LeadConversionFunnel**: Trực quan hóa phễu chuyển đổi khách hàng

#### API Endpoints:
```javascript
// Thống kê tổng quan
const stats = await strapi.find('dashboard/stats');

// Hoạt động gần đây
const activities = await strapi.find('activities', {
  sort: 'createdAt:desc',
  pagination: { page: 1, pageSize: 10 }
});

// Nhiệm vụ sắp tới
const upcomingTasks = await strapi.find('tasks', {
  filters: { dueDate: { $gt: new Date() } },
  sort: 'dueDate:asc',
  pagination: { page: 1, pageSize: 5 }
});
```

#### ProComponents:
- `ProCard` cho các thẻ thống kê
- `ProTable` cho danh sách hoạt động và nhiệm vụ
- `StatisticCard` cho hiển thị KPI
- Charts từ Ant Design cho biểu đồ và phễu

### 4.2. Module Quản Lý Khách Hàng

#### Components chính:
- **CustomersTable**: Bảng danh sách khách hàng có phân trang và lọc
- **CustomerDetail**: Xem chi tiết thông tin khách hàng
- **CustomerForm**: Form tạo/chỉnh sửa khách hàng
- **CustomerStageManager**: Quản lý giai đoạn của khách hàng
- **CustomerNotesTimeline**: Dòng thời gian ghi chú

#### API Endpoints:
```javascript
// Danh sách khách hàng
const customers = await strapi.find('customers', {
  filters: { /* based on search/filters */ },
  populate: ['stage', 'assignedTo'],
  sort: 'updatedAt:desc',
  pagination: { page, pageSize }
});

// Chi tiết khách hàng
const customer = await strapi.findOne('customers', id, {
  populate: ['stage', 'assignedTo', 'notes', 'tasks', 'deals', 'properties']
});

// Cập nhật giai đoạn
await strapi.update('customers', id, { stage: newStageId });
```

#### ProComponents:
- `ProTable` cho bảng khách hàng
- `ProForm` cho biểu mẫu khách hàng
- `ProDescriptions` cho hiển thị chi tiết
- `ProList` cho ghi chú và hoạt động
- `ProSteps` cho hiển thị tiến trình giai đoạn

### 4.3. Module Quản Lý Bất Động Sản

#### Components chính:
- **PropertiesTable**: Danh sách bất động sản
- **PropertyDetail**: Chi tiết bất động sản với gallery
- **PropertyForm**: Form tạo/chỉnh sửa bất động sản
- **PropertyMediaManager**: Quản lý media (hình ảnh/video)
- **PropertyMatchingTool**: Công cụ ghép khách hàng với bất động sản

#### API Endpoints:
```javascript
// Danh sách bất động sản
const properties = await strapi.find('properties', {
  filters: { /* based on search/filters */ },
  populate: ['category', 'status', 'images'],
  sort: 'createdAt:desc',
  pagination: { page, pageSize }
});

// Chi tiết bất động sản
const property = await strapi.findOne('properties', id, {
  populate: ['category', 'status', 'images', 'features', 'owner', 'deals']
});

// Tải lên hình ảnh bất động sản
const formData = new FormData();
formData.append('files', file);
formData.append('ref', 'api::property.property');
formData.append('refId', propertyId);
formData.append('field', 'images');

await strapi.request('/upload', {
  method: 'POST',
  body: formData
});
```

#### ProComponents:
- `ProTable` cho bảng bất động sản
- `ProForm` và `ProFormUploadButton` cho quản lý thông tin và media
- `ProCard` và `Image` từ Ant Design cho hiển thị gallery
- `ProDescriptions` cho chi tiết bất động sản

### 4.4. Module Quản Lý Giao Dịch

#### Components chính:
- **DealsTable**: Bảng tổng quan giao dịch
- **DealDetail**: Chi tiết giao dịch
- **DealForm**: Form tạo/cập nhật giao dịch
- **DealStageTimeline**: Timeline các giai đoạn giao dịch
- **DealDocumentManager**: Quản lý tài liệu giao dịch

#### API Endpoints:
```javascript
// Danh sách giao dịch
const deals = await strapi.find('deals', {
  filters: { /* based on search/filters */ },
  populate: ['customer', 'property', 'stage', 'assignedTo'],
  sort: 'updatedAt:desc',
  pagination: { page, pageSize }
});

// Chi tiết giao dịch
const deal = await strapi.findOne('deals', id, {
  populate: ['customer', 'property', 'stage', 'assignedTo', 'documents', 'notes']
});

// Cập nhật giai đoạn giao dịch
await strapi.update('deals', id, { stage: newStageId });

// Tải lên tài liệu giao dịch
// Similar to property image upload but for deal documents
```

#### ProComponents:
- `ProTable` cho bảng giao dịch
- `ProForm` cho form giao dịch
- `ProSteps` cho hiển thị giai đoạn
- `ProList` cho danh sách tài liệu và ghi chú
- `StatisticCard` cho thông tin tài chính

### 4.5. Module Quản Lý Nhiệm Vụ

#### Components chính:
- **TasksTable**: Bảng quản lý nhiệm vụ
- **TaskForm**: Form tạo/cập nhật nhiệm vụ
- **TaskCalendar**: Lịch nhiệm vụ theo ngày/tuần/tháng
- **TaskKanban**: Bảng Kanban cho nhiệm vụ

#### API Endpoints:
```javascript
// Danh sách nhiệm vụ
const tasks = await strapi.find('tasks', {
  filters: { /* based on search/filters */ },
  populate: ['assignedTo', 'relatedTo'],
  sort: 'dueDate:asc',
  pagination: { page, pageSize }
});

// Chi tiết nhiệm vụ
const task = await strapi.findOne('tasks', id, {
  populate: ['assignedTo', 'relatedTo', 'notes']
});

// Cập nhật trạng thái nhiệm vụ
await strapi.update('tasks', id, { status: newStatus });
```

#### ProComponents:
- `ProTable` cho bảng nhiệm vụ
- `ProForm` với `DatePicker` và `Select` cho form nhiệm vụ
- `ProList` cho danh sách nhiệm vụ dạng card
- Tích hợp với `Calendar` và `DragSortingTable` cho chế độ xem lịch và Kanban

### 4.6. Module Cài Đặt & Quản Trị (Admin)

#### Components chính:
- **UserManagement**: Quản lý người dùng và quyền
- **StageSettings**: Cấu hình giai đoạn khách hàng/giao dịch
- **CategorySettings**: Quản lý danh mục bất động sản
- **SystemSettings**: Cài đặt hệ thống

#### API Endpoints:
```javascript
// Quản lý người dùng (admin only)
const users = await strapi.find('users-permissions/users', {
  sort: 'username:asc',
  pagination: { page, pageSize }
});

// Cập nhật quyền người dùng
await strapi.update('users-permissions/users', userId, { role: newRoleId });

// Danh sách cài đặt giai đoạn
const stages = await strapi.find('stages', {
  filters: { type: stageType },
  sort: 'order:asc'
});

// Cập nhật cài đặt
await strapi.update('settings', 'crm', { 
  autoAssignment: enabled,
  notificationSettings: newSettings 
});
```

#### ProComponents:
- `ProTable` cho quản lý người dùng và cài đặt
- `ProForm` cho các biểu mẫu cài đặt
- `ProList` cho hiển thị danh sách cấu hình
- `DragSortingTable` cho sắp xếp thứ tự các giai đoạn

### 4.7. Components Dùng Chung

#### Auth Components:
- **LoginForm**: Form đăng nhập
- **RegisterForm**: Form đăng ký
- **PermissionGuard**: HOC kiểm tra quyền truy cập

#### Layout Components:
- **CRMLayout**: Layout chính cho CRM với sidebar và header
- **PageHeader**: Header trang với breadcrumbs
- **ActionHeader**: Header với các nút hành động

#### Form Components:
- **DynamicFilterForm**: Form lọc động cho các bảng dữ liệu
- **NotesForm**: Form thêm ghi chú áp dụng cho nhiều entity
- **RelationSelectField**: Select field với khả năng tìm kiếm quan hệ

#### ProComponents Mở Rộng:
- Custom theme và styled components dựa trên Ant Design
- Responsive wrapper cho các ProComponents
- Hook xử lý data cho ProTable và ProForm

## 5. Lộ Trình Triển Khai
1. **Phase 1**: Thiết lập cấu trúc dự án, xác thực, và layout cơ bản
2. **Phase 2**: Module Dashboard và Khách hàng
3. **Phase 3**: Module Bất động sản và Giao dịch
4. **Phase 4**: Module Nhiệm vụ và Báo cáo
5. **Phase 5**: Module Cài đặt và tính năng nâng cao

Mỗi phase sẽ bao gồm:
- Phát triển UI components
- Tích hợp API
- Kiểm thử tính năng
- Code review và tối ưu hóa hiệu suất

