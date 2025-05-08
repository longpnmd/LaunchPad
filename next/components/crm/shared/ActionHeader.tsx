'use client';

import React from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { useRouter } from 'next/navigation';

type Action = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  onClick?: () => void;
};

type ActionHeaderProps = {
  title: string;
  subTitle?: string;
  backPath?: string;
  actions?: Action[];
};

const ActionHeader: React.FC<ActionHeaderProps> = ({
  title,
  subTitle,
  backPath,
  actions = [],
}) => {
  const router = useRouter();

  return (
    <PageHeader
      className="bg-white mb-4 border-b"
      title={title}
      subTitle={subTitle}
      onBack={backPath ? () => router.push(backPath) : undefined}
      extra={
        <Space>
          {actions.map((action) => (
            <Button
              key={action.key}
              type={action.type || 'default'}
              icon={action.icon}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </Space>
      }
    />
  );
};

export default ActionHeader;
