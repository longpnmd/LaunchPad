'use client';

import React from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

interface BreadcrumbItem {
  path?: string;
  title: string;
}

interface PageHeaderProps {
  title: string;
  subTitle?: string;
  breadcrumb?: BreadcrumbItem[];
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

const CustomPageHeader: React.FC<PageHeaderProps> = ({
  title,
  subTitle,
  breadcrumb,
  extra,
  children,
}) => {
  return (
    <div className="site-page-header-wrapper">
      <PageHeader
        title={title}
        subTitle={subTitle}
        breadcrumbRender={() => (
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/admin/dashboard">Trang chủ</Link>
            </Breadcrumb.Item>
            {breadcrumb?.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.path ? (
                  <Link href={item.path}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        extra={extra}
      >
        {children}
      </PageHeader>
    </div>
  );
};

export default CustomPageHeader;
