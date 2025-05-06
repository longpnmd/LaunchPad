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

## 3. Chi Tiết Triển Khai Theo Module

### 3.1. Authentication & Layout

```tsx
import { ProLayout } from '@ant-design/pro-components';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Kiểm tra đăng nhập
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  // Menu CRM dựa trên vai trò
  const isAdmin = session?.user?.role === 'admin';
  
  return (
    <ProLayout
      title="CRM BĐS"
      logo="/logo.png"
      menu={{
        defaultSelectedKeys: ['dashboard'],
        items: [
          { key: 'dashboard', title: 'Tổng quan', path: '/dashboard' },
          { key: 'customers', title: 'Khách hàng', path: '/customers' },
          { key: 'properties', title: 'Bất động sản', path: '/properties' },
          { key: 'deals', title: 'Giao dịch', path: '/deals' },
          { key: 'tasks', title: 'Nhiệm vụ', path: '/tasks' },
          isAdmin ? { key: 'settings', title: 'Cài đặt', path: '/settings' } : null,
        ].filter(Boolean)
      }}
    >
      {children}
    </ProLayout>
  );
}
```

### 3.2. Dashboard (Trang Tổng Quan)

```tsx
'use client';

import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import { fetchDashboardStats } from '@/lib/api/dashboard';

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchDashboardStats();
      setStats(data);
    };
    loadStats();
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tổng quan CRM</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <ProCard>
          <StatisticCard
            title="Tổng khách hàng"
            value={stats.customerCount}
            status="active"
            style={{ height: 120 }}
          />
        </ProCard>
        
        <ProCard>
          <StatisticCard
            title="Deal đang hoạt động"
            value={stats.activeDeals}
            status="processing"
            style={{ height: 120 }}
          />
        </ProCard>
        
        <ProCard>
          <StatisticCard
            title="Nhiệm vụ cần làm"
            value={stats.pendingTasks}
            status="warning"
            style={{ height: 120 }}
          />
        </ProCard>
        
        <ProCard>
          <StatisticCard
            title="Bất động sản có sẵn"
            value={stats.availableProperties}
            status="default"
            style={{ height: 120 }}
          />
        </ProCard>
      </div>
      
      {/* Thêm các biểu đồ và thống kê khác ở đây */}
    </div>
  );
}
```

### 3.3. Quản Lý Khách Hàng (Customer)

```tsx
'use client';

import { ProTable, ActionType } from '@ant-design/pro-components';
import { Button, Tag, Space, Modal } from 'antd';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { fetchCustomers, deleteCustomer } from '@/lib/api/customers';
import CustomerForm from '@/components/crm/customers/CustomerForm';
import { getStageColor } from '@/lib/utils/stageUtils';

export default function CustomersPage() {
  const router = useRouter();
  const actionRef = useRef<ActionType>();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [stageOptions, setStageOptions] = useState([]);
  
  // Fetch client stages for dropdown
  useEffect(() => {
    const fetchStages = async () => {
      const data = await fetchClientStages();
      setStageOptions(data.map(stage => ({
        value: stage.id,
        label: stage.name
      })));
    };
    fetchStages();
  }, []);

  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'fullName',
      sorter: true,
      render: (_, record) => (
        <a onClick={() => router.push(`/customers/${record.id}`)}>{record.fullName}</a>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      hideInSearch: true,
    },
    {
      title: 'Điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Nguồn',
      dataIndex: 'source',
      valueEnum: {
        website: { text: 'Website' },
        referral: { text: 'Giới thiệu' },
        social: { text: 'Mạng xã hội' },
        event: { text: 'Sự kiện' },
        other: { text: 'Khác' },
      },
    },
    {
      title: 'Giai đoạn',
      dataIndex: ['stage', 'name'],
      valueEnum: stageOptions.reduce((acc, stage) => {
        acc[stage.value] = { text: stage.label };
        return acc;
      }, {}),
      render: (_, record) => (
        <Tag color={getStageColor(record.stage?.name)}>
          {record.stage?.name || 'N/A'}
        </Tag>
      ),
    },
    {
      title: 'Thao tác',
      key: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button 
          key="edit" 
          type="link" 
          onClick={() => router.push(`/customers/${record.id}/edit`)}
        >
          Chỉnh sửa
        </Button>,
        <Button
          key="delete"
          type="link"
          danger
          onClick={() => handleDelete(record.id)}
        >
          Xóa
        </Button>,
      ],
    },
  ];

  const handleDelete = async (id) => {
    Modal.confirm({
      title: 'Xác nhận xóa khách hàng',
      content: 'Bạn có chắc chắn muốn xóa khách hàng này?',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk: async () => {
        await deleteCustomer(id);
        actionRef.current?.reload();
      },
    });
  };

  return (
    <div className="p-6">
      <ProTable
        headerTitle="Danh Sách Khách Hàng"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            key="create"
            type="primary"
            onClick={() => setCreateModalVisible(true)}
          >
            Thêm khách hàng mới
          </Button>,
        ]}
        request={async (params, sort, filter) => {
          const result = await fetchCustomers({
            ...params,
            sorter: sort,
            filter,
          });
          return {
            data: result.data,
            success: true,
            total: result.meta.pagination.total,
          };
        }}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
      />

      <CustomerForm
        visible={createModalVisible}
        onCancel={() => setCreateModalVisible(false)}
        onSuccess={() => {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }}
      />
    </div>
  );
}
```

### 3.4. API Service Layer

API Service Layer là lớp trung gian giúp frontend giao tiếp với backend Strapi một cách hiệu quả và nhất quán.

#### 3.4.1. Thiết Lập @strapi/client

Đầu tiên, cần cài đặt các thư viện cần thiết:

```bash
npm install @strapi/client qs
```

Tạo client Strapi cấu hình sẵn:

```tsx
// filepath: /lib/api/strapiClient.ts
import { createClient } from '@strapi/client';

const strapiClient = createClient({
  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337',
  prefix: '/api',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
});

// Interceptor để thêm token xác thực vào header
const addAuthInterceptor = (token: string) => {
  strapiClient.axios.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

const setToken = (token: string) => {
  addAuthInterceptor(token);
};

export { strapiClient, setToken };
```

#### 3.4.2. Triển Khai API Services Cho Các Entity

Tạo các service module cho từng loại thực thể:

```tsx
// filepath: /lib/api/customers.ts
import { strapiClient } from './strapiClient';
import qs from 'qs';

export const fetchCustomers = async (params = {}) => {
  const query = qs.stringify({
    ...params,
    populate: ['stage', 'agent'],
  }, { encodeValuesOnly: true });
  
  const response = await strapiClient.request({
    method: 'GET',
    path: `/customers`,
    params: query
  });
  return response.data;
};

export const fetchCustomer = async (id) => {
  const response = await strapiClient.request({
    method: 'GET',
    path: `/customers/${id}`,
    params: { populate: '*' }
  });
  return response.data;
};

export const createCustomer = async (data) => {
  const response = await strapiClient.request({
    method: 'POST',
    path: '/customers',
    data: { data }
  });
  return response.data;
};

export const updateCustomer = async (id, data) => {
  const response = await strapiClient.request({
    method: 'PUT',
    path: `/customers/${id}`,
    data: { data }
  });
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await strapiClient.request({
    method: 'DELETE',
    path: `/customers/${id}`
  });
  return response.data;
};
```

Tương tự, tạo các module API cho deals, properties và các thực thể khác:

```tsx
// filepath: /lib/api/deals.ts
import { strapiClient } from './strapiClient';
import qs from 'qs';

export const fetchDeals = async (params = {}) => {
  const query = qs.stringify({
    ...params,
    populate: ['customer', 'property', 'stage', 'agent'],
  }, { encodeValuesOnly: true });
  
  const response = await strapiClient.request({
    method: 'GET',
    path: `/deals`,
    params: query
  });
  return response.data;
};

// Thêm các phương thức khác tương tự như customer
```

#### 3.4.3. Tích Hợp Với NextAuth.js

Tạo utilities xác thực:

```tsx
// filepath: /lib/auth.ts
import { strapiClient, setToken } from './api/strapiClient';

export const authenticateUser = async (identifier, password) => {
  try {
    const response = await strapiClient.request({
      method: 'POST',
      path: '/auth/local',
      data: {
        identifier,
        password
      }
    });
    
    // Tự động cài đặt token cho các request tiếp theo
    setToken(response.data.jwt);
    
    return response.data;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};
```

Cấu hình NextAuth.js:

```tsx
// filepath: /app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authenticateUser } from '@/lib/auth';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) return null;
          
          const { jwt, user } = await authenticateUser(
            credentials.email,
            credentials.password
          );
          
          return { ...user, jwt };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
        token.role = user.role?.type || 'agent';
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.jwt = token.jwt;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
```

#### 3.4.4. Sử Dụng React Query/SWR Cho Quản Lý Trạng Thái API

Tích hợp với React Query để cải thiện trải nghiệm người dùng:

```tsx
// filepath: /lib/hooks/useCustomers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCustomers, createCustomer, updateCustomer, deleteCustomer } from '@/lib/api/customers';

export const useCustomers = (params = {}) => {
  return useQuery({
    queryKey: ['customers', params],
    queryFn: () => fetchCustomers(params),
  });
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
};

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }) => updateCustomer(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
};
```

#### 3.4.5. Xử Lý Lỗi API Tập Trung

Tạo utility xử lý lỗi API:

```tsx
// filepath: /lib/utils/apiErrorHandler.ts
import { notification } from 'antd';

type ErrorResponse = {
  error: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
};

export const handleApiError = (error: any) => {
  let errorMessage = 'Có lỗi xảy ra. Vui lòng thử lại sau.';
  let errorDescription = '';
  
  // Xử lý định dạng lỗi từ Strapi
  if (error.response?.data) {
    const errorData = error.response.data as ErrorResponse;
    
    if (errorData.error) {
      errorMessage = errorData.error.name || errorMessage;
      errorDescription = errorData.error.message || '';
    }
  }
  
  // Hiển thị thông báo lỗi
  notification.error({
    message: errorMessage,
    description: errorDescription,
    duration: 5,
  });
  
  console.error('API Error:', error);
  
  return { errorMessage, errorDescription };
};
```

Mô hình API Service Layer này đảm bảo tính nhất quán trong giao tiếp với backend, xử lý lỗi tập trung, và tối ưu hóa hiệu suất với caching thông minh qua React Query.

## 4. Form Components (ProForm)

### 4.1. CustomerForm

```tsx
'use client';

import { Modal } from 'antd';
import {
  ProForm,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { createCustomer, updateCustomer } from '@/lib/api/customers';
import { useState, useEffect } from 'react';
import { fetchClientStages } from '@/lib/api/client-stages';

interface CustomerFormProps {
  visible: boolean;
  initialValues?: Record<string, any>;
  onCancel: () => void;
  onSuccess: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  visible,
  initialValues,
  onCancel,
  onSuccess,
}) => {
  const [form] = ProForm.useForm();
  const [stages, setStages] = useState([]);
  const isEdit = Boolean(initialValues?.id);
  
  useEffect(() => {
    const loadStages = async () => {
      const data = await fetchClientStages();
      setStages(data.map(stage => ({
        value: stage.id,
        label: stage.name
      })));
    };
    
    loadStages();
  }, []);

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue({
        ...initialValues,
        stage: initialValues.stage?.id
      });
    }
  }, [visible, initialValues, form]);

  const handleSubmit = async (values) => {
    try {
      if (isEdit) {
        await updateCustomer(initialValues.id, values);
      } else {
        await createCustomer(values);
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  return (
    <Modal
      title={isEdit ? 'Chỉnh sửa khách hàng' : 'Thêm khách hàng mới'}
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <ProForm
        form={form}
        onFinish={handleSubmit}
        submitter={{
          render: (_, dom) => dom,
        }}
        initialValues={initialValues}
      >
        <ProFormText
          name="fullName"
          label="Họ tên"
          placeholder="Nhập họ tên khách hàng"
          rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
        />
        
        <ProFormText
          name="email"
          label="Email"
          placeholder="email@example.com"
          rules={[
            { type: 'email', message: 'Email không đúng định dạng' },
          ]}
        />
        
        <ProFormText
          name="phone"
          label="Số điện thoại"
          placeholder="0912345678"
        />
        
        <ProFormSelect
          name="source"
          label="Nguồn khách hàng"
          valueEnum={{
            website: 'Website',
            referral: 'Giới thiệu',
            social: 'Mạng xã hội',
            event: 'Sự kiện',
            other: 'Khác',
          }}
          placeholder="Chọn nguồn khách hàng"
        />
        
        <ProFormSelect
          name="stage"
          label="Giai đoạn"
          options={stages}
          placeholder="Chọn giai đoạn khách hàng"
          rules={[{ required: true, message: 'Vui lòng chọn giai đoạn' }]}
        />
        
        <ProFormTextArea
          name="notes"
          label="Ghi chú"
          placeholder="Nhập ghi chú về khách hàng"
        />
      </ProForm>
    </Modal>
  );
};

export default CustomerForm;
```

## 5. Deal Pipeline View

```tsx
'use client';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ProCard } from '@ant-design/pro-components';
import { Button, Avatar, Tag, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { fetchDeals, updateDeal } from '@/lib/api/deals';
import { fetchClientStages } from '@/lib/api/client-stages';
import { PlusOutlined } from '@ant-design/icons';
import DealForm from '@/components/crm/deals/DealForm';

const { Text } = Typography;

export default function DealPipelinePage() {
  const [stages, setStages] = useState([]);
  const [dealsByStage, setDealsByStage] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const loadData = async () => {
    // Load stages
    const stagesData = await fetchClientStages();
    setStages(stagesData);
    
    // Load deals and organize by stage
    const deals = await fetchDeals();
    const dealGroups = {};
    stagesData.forEach(stage => {
      dealGroups[stage.id] = deals.data.filter(
        deal => deal.stage?.id === stage.id
      );
    });
    setDealsByStage(dealGroups);
  };
  
  useEffect(() => {
    loadData();
  }, []);
  
  const onDragEnd = async (result) => {
    if (!result.destination) return;
    
    const { draggableId, source, destination } = result;
    if (source.droppableId === destination.droppableId) return;
    
    // Update the deal's stage
    const dealId = draggableId;
    const newStageId = destination.droppableId;
    
    try {
      await updateDeal(dealId, { stage: newStageId });
      
      // Update the local state without refetching
      const updatedDealsByStage = { ...dealsByStage };
      const deal = updatedDealsByStage[source.droppableId].find(d => d.id === dealId);
      
      updatedDealsByStage[source.droppableId] = updatedDealsByStage[source.droppableId]
        .filter(d => d.id !== dealId);
      
      updatedDealsByStage[destination.droppableId] = [
        ...updatedDealsByStage[destination.droppableId],
        { ...deal, stage: { id: newStageId } }
      ];
      
      setDealsByStage(updatedDealsByStage);
    } catch (error) {
      console.error('Error updating deal stage:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Pipeline Giao Dịch</h1>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Giao dịch mới
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {stages.map(stage => (
            <div key={stage.id} className="flex flex-col">
              <div className="bg-gray-100 p-3 rounded-t-md">
                <div className="flex justify-between items-center">
                  <Text strong>{stage.name}</Text>
                  <Tag>{dealsByStage[stage.id]?.length || 0}</Tag>
                </div>
              </div>
              
              <Droppable droppableId={stage.id}>
                {(provided) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-gray-50 p-2 flex-grow min-h-[400px] rounded-b-md"
                  >
                    {dealsByStage[stage.id]?.map((deal, index) => (
                      <Draggable key={deal.id} draggableId={deal.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ProCard
                              className="mb-3 cursor-pointer"
                              hoverable
                              onClick={() => router.push(`/deals/${deal.id}`)}
                            >
                              <h4>{deal.title}</h4>
                              <div className="flex justify-between items-center mt-2">
                                <Text type="secondary">
                                  {deal.customer?.fullName || 'N/A'}
                                </Text>
                                <Text strong>
                                  {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                  }).format(deal.dealValue || 0)}
                                </Text>
                              </div>
                              <div className="mt-3 flex justify-between items-center">
                                <div>
                                  {deal.property?.title && (
                                    <Tag color="blue">{deal.property.title}</Tag>
                                  )}
                                </div>
                                {deal.agent && (
                                  <Avatar size="small">
                                    {deal.agent.username?.charAt(0).toUpperCase()}
                                  </Avatar>
                                )}
                              </div>
                            </ProCard>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      <DealForm
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSuccess={() => {
          setIsModalVisible(false);
          loadData();
        }}
      />
    </div>
  );
}
```

## 6. Giai Đoạn Triển Khai

### Giai Đoạn 1: Thiết Lập Môi Trường & Authentication
1. Cài đặt các thư viện cần thiết:
   ```bash
   npm install @ant-design/pro-components antd @ant-design/icons axios qs react-beautiful-dnd next-auth @strapi/client
   ```

2. Cấu hình NextAuth.js với Strapi

3. Thiết lập hệ thống layout và routing

### Giai Đoạn 2: Triển Khai Các Module Cơ Bản
1. Dashboard tổng quan
2. Quản lý khách hàng
3. Quản lý bất động sản
4. Quản lý giao dịch (danh sách + pipeline)

### Giai Đoạn 3: Triển Khai Các Module Nâng Cao
1. Quản lý nhiệm vụ và lịch biểu
2. Hệ thống ghi chú
3. Báo cáo và thống kê

### Giai Đoạn 4: Quản lý Quyền Và Tối Ưu Hóa
1. Phân quyền Admin vs Agent
2. Tối ưu hiệu suất và UX
3. Testing và triển khai

## 7. Kết Luận

Kế hoạch tích hợp Ant Design ProComponents vào hệ thống CRM Bất Động Sản này sẽ giúp xây dựng một giao diện chuyên nghiệp, đẹp mắt và đầy đủ chức năng. Sử dụng các component như ProTable, ProForm, ProCard sẽ giảm thiểu thời gian phát triển và đảm bảo trải nghiệm người dùng nhất quán.

Lưu ý triển khai:
- Bảo đảm xác thực và phân quyền đúng theo vai trò (Agent vs Admin)
- Xử lý logic phụ thuộc vào role để hiển thị dữ liệu phù hợp
- Sử dụng tính năng responsive của ProComponents để đảm bảo trải nghiệm tốt trên các thiết bị