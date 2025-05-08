'use client';

import React, { useState } from 'react';
import { Alert, Button, Form, Input, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '@/lib/api/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useAuth();
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onFinish = async (values: { email: string; password: string }) => {
    setLoginError(null);
    try {
      const success = await login(values.email, values.password);
      if (success) {
        router.push('/dashboard');
      }
    } catch (err) {
      setLoginError('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={80} 
            height={80} 
            className="mx-auto"
          />
          <Title level={2} className="mt-4">
            CRM Bất Động Sản
          </Title>
          <Text className="text-gray-500">
            Đăng nhập vào hệ thống quản lý khách hàng
          </Text>
        </div>

        <Card className="w-full shadow-md">
          {(error || loginError) && (
            <Alert
              message="Lỗi đăng nhập"
              description={error || loginError}
              type="error"
              showIcon
              className="mb-4"
            />
          )}

          <Form
            form={form}
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Email không hợp lệ' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
              />
            </Form.Item>

            <div className="flex justify-between mb-4">
              <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">
                Quên mật khẩu?
              </Link>
              <Link href="/register" className="text-blue-600 hover:text-blue-800">
                Đăng ký tài khoản
              </Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                block
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
