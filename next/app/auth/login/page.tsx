"use client";

import React, { CSSProperties, useState } from "react";
import {
  Alert,
  Button,
  Form,
  Input,
  Typography,
  Card,
  Divider,
  message,
  Space,
  Tabs,
  theme,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  AlipayOutlined,
  MobileOutlined,
  TaobaoOutlined,
  WeiboOutlined,
} from "@ant-design/icons";
import { useAuth } from "@/lib/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LoginFormPage,
  ProFormText,
  ProFormCaptcha,
  ProFormCheckbox,
} from "@ant-design/pro-components";
type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "18px",
  verticalAlign: "middle",
  cursor: "pointer",
};
const { Title, Text } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useAuth();
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginType, setLoginType] = useState<LoginType>("phone");
  const { token } = theme.useToken();

  const onFinish = async (values: { identifier: string; password: string }) => {
    setLoginError(null);
    try {
      const success = await login(values.identifier, values.password);
      if (success) {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setLoginError(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin."
      );
    }
  };

  return (
    // set full height and width for the parent div
    <div className="flex items-center justify-center h-screen">
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="https://github.githubassets.com/favicons/favicon.png"
        backgroundVideoUrl="https://videos.pexels.com/video-files/27287040/12110926_2560_1440_25fps.mp4"
        title="Github"
        containerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(4px)",
        }}
        onFinish={onFinish}
        subTitle="Nền tảng lưu trữ mã nguồn lớn nhất thế giới"
        activityConfig={{
          style: {
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
            color: token.colorTextHeading,
            borderRadius: 8,
            backgroundColor: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(4px)",
          },
          title: "Tiêu đề sự kiện, có thể cấu hình hình ảnh",
          subTitle: "Giới thiệu và mô tả sự kiện",
          action: (
            <Button
              size="large"
              style={{
                borderRadius: 20,
                background: token.colorBgElevated,
                color: token.colorPrimary,
                width: 120,
              }}
            >
              Xem ngay
            </Button>
          ),
        }}
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Divider plain>
              <span
                style={{
                  color: token.colorTextPlaceholder,
                  fontWeight: "normal",
                  fontSize: 14,
                }}
              >
                Các cách đăng nhập khác
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid " + token.colorPrimaryBorder,
                  borderRadius: "50%",
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid " + token.colorPrimaryBorder,
                  borderRadius: "50%",
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid " + token.colorPrimaryBorder,
                  borderRadius: "50%",
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: "#1890ff" }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={"account"} tab={"Tài khoản"} />
          <Tabs.TabPane key={"phone"} tab={"Số điện thoại"} />
        </Tabs>
        {loginType === "account" && (
          <>
            <ProFormText
              name="identifier"
              fieldProps={{
                size: "large",
                prefix: (
                  <UserOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              placeholder={"Tên đăng nhập: admin hoặc user"}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              placeholder={"Mật khẩu: ant.design"}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              name="mobile"
              placeholder={"Số điện thoại"}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "Định dạng số điện thoại không đúng!",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder={"Vui lòng nhập mã xác thực"}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${"Lấy xác thực"}`;
                }
                return "Lấy xác thực";
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mã xác thực!",
                },
              ]}
              onGetCaptcha={async () => {
                message.success(
                  "Lấy mã xác thực thành công! Mã xác thực là: 1234"
                );
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            Tự động đăng nhập
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            Quên mật khẩu
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
}
