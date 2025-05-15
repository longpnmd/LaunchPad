"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ConfigProvider } from "antd";
import { ProLayout } from "@ant-design/pro-components";
import Link from "next/link";
import Image from "next/image";
import viVN from "antd/lib/locale/vi_VN";
import enUS from "antd/lib/locale/en_US";
import { 
  CheckSquareOutlined, DashboardOutlined, DollarOutlined, 
  HomeOutlined, SettingOutlined, UserOutlined 
} from "@ant-design/icons";
import { useAuth } from "@/lib/hooks/useAuth";
import { strapiImage } from "@/lib/strapi/strapiImage";

// Menu items cho sidebar
const routes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    path: "/admin/customers",
    name: "Khách hàng",
    icon: <UserOutlined />,
  },
  {
    path: "/admin/properties",
    name: "Bất động sản",
    icon: <HomeOutlined />,
  },
  {
    path: "/admin/deals",
    name: "Giao dịch",
    icon: <DollarOutlined />,
  },
  {
    path: "/admin/tasks",
    name: "Nhiệm vụ",
    icon: <CheckSquareOutlined />,
  },
  {
    path: "/admin/settings",
    name: "Cài đặt",
    icon: <SettingOutlined />,
  },
];

export default function AdminClientLayout({
  children,
  params,
  initialData,
}: {
  children: React.ReactNode;
  params: { locale: string };
  initialData: API.GlobalResponse['data'];
}) {
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-3 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login
    if (typeof window !== "undefined") {
      window.location.href = "/auth/login";
    }
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p>Đang chuyển hướng đến trang đăng nhập...</p>
        </div>
      </div>
    );
  }

  return (
    <ConfigProvider locale={params.locale === "vi" ? viVN : enUS}>
      <ProLayout
        title="CRM BĐS"
        logo={<Image src={strapiImage(initialData?.seo?.metaImage?.url)} alt="Logo" width={32} height={32} />}
        menu={{
          type: "group",
        }}
        route={{
          path: "/",
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
          <Link href={item.path || "/admin/dashboard"} legacyBehavior>
            <a>{dom}</a>
          </Link>
        )}
        avatarProps={{
          src: user?.id || "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
          size: "small",
          title: user?.username,
          render: (_, dom) => (
            <div onClick={() => logout()}>
              {dom}
            </div>
          ),
        }}
      >
        {children}
      </ProLayout>
    </ConfigProvider>
  );
}