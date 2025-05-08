'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ConfigProvider } from 'antd';
import { ProLayout } from '@ant-design/pro-components';
import Link from 'next/link';
import Image from 'next/image';
import viVN from 'antd/lib/locale/vi_VN';
import enUS from 'antd/lib/locale/en_US';
import { useAuth } from '@/lib/api/hooks/useAuth';

// Menu items cho sidebar
const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'DashboardOutlined',
  },
  {
    path: '/customers',
    name: 'Khách hàng',
    icon: 'UserOutlined',
  },
  {
    path: '/properties',
    name: 'Bất động sản',
    icon: 'HomeOutlined',
  },
  {
    path: '/deals',
    name: 'Giao dịch',
    icon: 'DollarOutlined',
  },
  {
    path: '/tasks',
    name: 'Nhiệm vụ',
    icon: 'CheckSquareOutlined',
  },
  {
    path: '/settings',
    name: 'Cài đặt',
    icon: 'SettingOutlined',
  },
];

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    // Redirect to login
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/login';
    }
    return <div>Redirecting to login...</div>;
  }
  
  return (
    <ConfigProvider locale={params.locale === 'vi' ? viVN : enUS}>
      <ProLayout
        title="CRM BĐS"
        logo={<Image src="/logo.png" alt="Logo" width={32} height={32} />}
        menu={{
          type: 'group',
        }}
        route={{
          path: '/',
          routes,
        }}
        location={{
          pathname,
        }}
        navTheme="light"
        fixSiderbar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        menuItemRender={(item, dom) => (
          <Link href={item.path || '/dashboard'} legacyBehavior>
            <a>{dom}</a>
          </Link>
        )}
        avatarProps={{
          src: user?.id || 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          size: 'small',
          title: user?.username,
          render: (_, dom) => {
            return (
              <div
                onClick={() => {
                  logout();
                }}
              >
                {dom}
              </div>
            );
          },
        }}
      >
        {children}
      </ProLayout>
    </ConfigProvider>
  );
}
