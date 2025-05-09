'use client';

import React, { useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Button, Space, Tag, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useCustomers } from '@/lib/hooks/useCustomers';

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  stage: {
    id: number;
    name: string;
    color?: string;
  };
  assignedTo: {
    id: number;
    username: string;
  };
  createdAt: string;
};

type CustomersTableProps = {
  loading?: boolean;
  dataSource?: Customer[];
  onEditCustomer?: (customer: Customer) => void;
  onRefresh?: () => void;
};

const CustomersTable: React.FC<CustomersTableProps> = ({
  loading = false,
  dataSource = [],
  onEditCustomer,
  onRefresh,
}) => {
  const router = useRouter();
  const { deleteCustomer } = useCustomers();
  const [selectedRows, setSelectedRows] = useState<Customer[]>([]);

  // Xử lý xóa khách hàng
  const handleDelete = (customer: Customer) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa khách hàng "${customer.name}"?`,
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk: async () => {
        try {
          await deleteCustomer(customer.id);
          message.success('Xóa khách hàng thành công');
          if (onRefresh) onRefresh();
        } catch (error) {
          message.error('Không thể xóa khách hàng');
        }
      },
    });
  };

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Giai đoạn',
      dataIndex: 'stage',
      key: 'stage',
      render: (stage: { name: string; color: string }) => (
        <Tag color={stage.color || 'blue'}>{stage.name}</Tag>
      ),
      filters: [
        { text: 'Lead', value: 'lead' },
        { text: 'Warm', value: 'warm' },
        { text: 'Hot', value: 'hot' },
        { text: 'Active', value: 'active' },
      ],
    },
    {
      title: 'Phụ trách',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
      render: (assignedTo?: { username: string }) => assignedTo?.username || 'Chưa phân công',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      valueType: 'date',
      sorter: true,
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_: any, record: Customer) => (
        <Space size="small">
          <Button
            icon={<EyeOutlined />}
            onClick={() => router.push(`/customers/${record.id}`)}
          />
          <Button 
            icon={<EditOutlined />} 
            onClick={() => onEditCustomer && onEditCustomer(record)}
          />
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <ProTable<Customer>
      loading={loading}
      dataSource={dataSource}
      rowKey="id"
      // @ts-ignore
      columns={columns}
      search={{
        labelWidth: 'auto',
      }}
      rowSelection={{
        onChange: (_, selectedRows) => {
          setSelectedRows(selectedRows);
        },
      }}
      pagination={{
        showQuickJumper: true,
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="Danh sách khách hàng"
      toolBarRender={() => [
        <Button key="refresh" onClick={onRefresh}>
          Làm mới
        </Button>,
      ]}
    />
  );
};

export default CustomersTable;
