import React, { useRef } from 'react';
import { ProTable, ActionType } from '@ant-design/pro-components';
import { Button, Space, Tooltip, message } from 'antd';
import { PlusOutlined, EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Link from 'next/link';
import StageTag from '@/components/common/StageTag';
import { api } from '@/lib/services';
import { Customer } from '@/lib/services/api-service';

const CustomerTable: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'fullName',
      render: (text: string, record: Customer) => (
        <Link href={`/admin/customers/${record.documentId}`}>{text}</Link>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      search: true,
    },
    {
      title: 'Điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Nguồn',
      dataIndex: 'source',
      filters: [
        { text: 'Website', value: 'website' },
        { text: 'Facebook', value: 'facebook' },
        { text: 'Zalo', value: 'zalo' },
        { text: 'Giới thiệu', value: 'referral' },
        { text: 'Sự kiện', value: 'event' },
        { text: 'Khác', value: 'other' },
      ],
      filterMultiple: true,
    },
    {
      title: 'Giai đoạn',
      dataIndex: ['stage', 'name'],
      render: (stageName: string) => <StageTag stage={stageName || 'N/A'} />,
      filters: [
        { text: 'Lead', value: 'Lead' },
        { text: 'Warm', value: 'Warm' },
        { text: 'Hot', value: 'Hot' },
        { text: 'Active', value: 'Active' },
        { text: 'Pending', value: 'Pending' },
        { text: 'Firm', value: 'Firm' },
        { text: 'SOI A', value: 'SOI A' },
        { text: 'SOI B', value: 'SOI B' },
      ],
      filterMultiple: true,
    },
    {
      title: 'Agent phụ trách',
      dataIndex: ['agent', 'username'],
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      valueType: 'date',
      sorter: true,
    },
    {
      title: 'Hành động',
      valueType: 'option',
      render: (_: any, record: Customer) => [
        <Tooltip title="Xem chi tiết" key="view">
          <Link href={`/admin/customers/${record.documentId}`}>
            <Button type="text" icon={<EyeOutlined />} />
          </Link>
        </Tooltip>,
        <Tooltip title="Chỉnh sửa" key="edit">
          <Link href={`/admin/customers/${record.documentId}/edit`}>
            <Button type="text" icon={<EditOutlined />} />
          </Link>
        </Tooltip>,
        <Tooltip title="Xóa" key="delete">
          <Button 
            type="text" 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteCustomer(record.documentId)}
          />
        </Tooltip>,
      ],
    },
  ];

  // Thêm hàm xóa khách hàng
  const handleDeleteCustomer = async (id?: any) => {
    if (!id) return;
    
    try {
      await api.customers.deleteCustomersId(id);
      message.success('Xóa khách hàng thành công');
      actionRef.current?.reload();
    } catch (error) {
      message.error('Không thể xóa khách hàng');
    }
  };

  return (
    <ProTable<Customer>
      actionRef={actionRef}
      rowKey="id"
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => [
        <Button
          key="add"
          type="primary"
          icon={<PlusOutlined />}
        >
          <Link href="/admin/customers/new">
            Thêm khách hàng
          </Link>
        </Button>,
      ]}
      request={async (params, sorter, filter) => {
        try {
          // Sử dụng API service thay vì fetch trực tiếp
          const response = await api.customers.getCustomers({
            'pagination[page]': params.current,
            'pagination[pageSize]': params.pageSize,
            // Xử lý sắp xếp
            sort: sorter && Object.keys(sorter).length 
              ? Object.entries(sorter)
                  .map(([key, val]) => `${key}:${val === 'ascend' ? 'asc' : 'desc'}`)
                  .join(',')
              : undefined,
            // Thêm populate để lấy thông tin Stage và Agent
            // populate: 'stage,agent',
          });
          
          return {
            data: response.data.data || [],
            success: true,
            total: response.data.meta?.pagination?.total || 0,
          };
        } catch (error) {
          message.error('Không thể tải dữ liệu khách hàng');
          return {
            data: [],
            success: false,
            total: 0,
          };
        }
      }}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
      }}
      //@ts-ignore
      columns={columns}
    />
  );
};

export default CustomerTable;
