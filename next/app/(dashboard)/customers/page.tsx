'use client';

import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CustomersTable from '@/components/crm/customers/CustomersTable';
import CustomerForm from '@/components/crm/customers/CustomerForm';
import { useCustomers } from '@/lib/api/hooks/useCustomers';

// Add this function to transform customer data
const transformCustomerData = (customers: any[]): any[] => {
  return customers?.map(customer => ({
    ...customer,
    // Ensure assignedTo is always an object and not undefined
    assignedTo: customer.assignedTo || { id: 0, username: '' }
  })) || [];
};

export default function CustomersPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<any>(null);
  const { customers, isLoading, error, refetch, createCustomer, updateCustomer } = useCustomers();

  const showCreateModal = () => {
    setEditingCustomer(null);
    setIsModalVisible(true);
  };

  const showEditModal = (customer: any) => {
    setEditingCustomer(customer);
    setIsModalVisible(true);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingCustomer) {
        await updateCustomer(editingCustomer.id, values);
        message.success('Cập nhật khách hàng thành công!');
      } else {
        await createCustomer(values);
        message.success('Thêm khách hàng thành công!');
      }
      setIsModalVisible(false);
      refetch();
    } catch (err) {
      message.error('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <PageContainer
      title="Quản Lý Khách Hàng"
      subTitle="Danh sách và quản lý thông tin khách hàng"
      extra={[
        <Button
          key="add"
          type="primary"
          icon={<PlusOutlined />}
          onClick={showCreateModal}
        >
          Thêm Khách Hàng
        </Button>,
      ]}
    >
      <CustomersTable
        loading={isLoading}
        dataSource={transformCustomerData(customers)}
        onEditCustomer={showEditModal}
        onRefresh={refetch}
      />

      <CustomerForm
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSubmit={handleFormSubmit}
        initialValues={editingCustomer}
      />
    </PageContainer>
  );
}
