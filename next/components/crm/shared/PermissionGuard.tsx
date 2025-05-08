'use client';

import React from 'react';
import { useAuth } from '@/lib/api/hooks/useAuth';
import { Spin } from 'antd';

type PermissionGuardProps = {
  children: React.ReactNode;
  allowedRoles?: string[];
  fallback?: React.ReactNode;
};

export const PermissionGuard: React.FC<PermissionGuardProps> = ({
  children,
  allowedRoles = ['admin', 'agent'],
  fallback = <div>Bạn không có quyền truy cập nội dung này</div>,
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Đang kiểm tra quyền truy cập..." />
      </div>
    );
  }

  if (!user) {
    return <div>Vui lòng đăng nhập để tiếp tục</div>;
  }

  const hasPermission = allowedRoles.includes(user?.role?.type || 'agent');

  if (!hasPermission) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default PermissionGuard;
