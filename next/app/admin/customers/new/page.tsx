'use client';

import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import PageHeader from '@/components/layout/PageHeader';
import CustomerForm from '../components/CustomerForm';

export default function NewCustomerPage() {
  return (
    <AdminLayout>
      <PageHeader
        title="Thêm khách hàng mới"
        breadcrumb={[
          { title: 'Trang chủ', path: '/admin/dashboard' },
          { title: 'Khách hàng', path: '/admin/customers' },
          { title: 'Thêm mới' },
        ]}
      />
      
      <CustomerForm />
    </AdminLayout>
  );
}
