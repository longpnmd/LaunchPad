'use client';

import React, { useState } from 'react';
import { ProLayout, ProSettings } from '@ant-design/pro-components';
import { Avatar, Dropdown, Spin } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import type { MenuProps } from 'antd';

// Định nghĩa menu items cho sidebar
const menuItems = [
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: 'DashboardOutlined',
  },
  {
    path: '/admin/customers',
    name: 'Khách hàng',
    icon: 'UserOutlined',
  },
  {
    path: '/admin/properties',
    name: 'Bất động sản',
    icon: 'HomeOutlined',
  },
  {
    path: '/admin/deals',
    name: 'Giao dịch',
    icon: 'DollarOutlined',
  },
  {
    path: '/admin/tasks',
    name: 'Công việc',
    icon: 'CheckSquareOutlined',
  },
  {
    path: '/admin/settings',
    name: 'Cài đặt',
    icon: 'SettingOutlined',
    access: 'admin', // Chỉ admin mới thấy menu này
  },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname(); // Sử dụng usePathname thay vì router.pathname
  
  const [settings] = useState<Partial<ProSettings>>({
    fixSiderbar: true,
    layout: 'mix',
  });
  
  const [loading] = useState(false);

  // Menu dropdown cho user - sử dụng MenuProps từ Ant Design
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Hồ sơ',
      onClick: () => router.push('/admin/profile'),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Cài đặt',
      onClick: () => router.push('/admin/settings'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      onClick: () => {
        // Xử lý đăng xuất
        router.push('/auth/login');
      },
    },
  ];

  return (
    <ProLayout
      logo="/logo.png"
      title="CRM BĐS"
      route={{ routes: menuItems }}
      location={{ pathname: pathname }} // Sử dụng pathname từ usePathname
      menu={{ defaultOpenAll: true }}
      menuItemRender={(item, dom) => (
        <Link href={item.path || '#'}>
          {dom}
        </Link>
      )}
      rightContentRender={() => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: 8 }}>Admin User</span>
            </span>
          </Dropdown>
        </div>
      )}
      {...settings}
    >
      <Spin spinning={loading} size="large">
        {children}
      </Spin>
    </ProLayout>
  );
};

export default AdminLayout;
