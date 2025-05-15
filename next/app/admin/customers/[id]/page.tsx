"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Button,
  Tabs,
  Card,
  Descriptions,
  Spin,
  message,
  Typography,
  Row,
  Col,
  Modal,
  Tooltip,
  Space,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PhoneOutlined,
  MailOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import AdminLayout from "@/components/layout/AdminLayout";
import PageHeader from "@/components/layout/PageHeader";
import StageTag from "@/components/common/StageTag";
import NotesSection from "../components/NotesSection";
import EntityTimeline from "@/components/common/EntityTimeline";
import api from "@/lib/api";

const { TabPane } = Tabs;
const { Title, Text } = Typography;
export default function CustomerDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [customer, setCustomer] = useState<API.Customer>();
  const [loading, setLoading] = useState(true);
  const { confirm } = Modal;

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        setLoading(true);
        const { data } = await api.customer.getCustomersId({
          id: parseInt(id as string),
        });
        if (!data) {
          throw new Error("Không tìm thấy khách hàng");
        }
        setCustomer(data as API.Customer);
        console.log(data);
      } catch (error) {
        message.error("Không thể tải thông tin khách hàng.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCustomer();
    }
  }, [id]);

  const handleEdit = () => {
    router.push(`/admin/customers/${id}/edit`);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Bạn có chắc chắn muốn xóa khách hàng này?",
      icon: <ExclamationCircleOutlined />,
      content: "Dữ liệu sẽ bị xóa vĩnh viễn và không thể khôi phục.",
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: async () => {
        try {
          await api.customer.deleteCustomersId({
            id: parseInt(id as string),
          });

          message.success("Xóa khách hàng thành công!");
          router.push("/admin/customers");
        } catch (error) {
          message.error("Có lỗi xảy ra khi xóa khách hàng.");
        }
      },
    });
  };

  const extra = (
    <Space>
      <Tooltip title="Chỉnh sửa">
        <Button icon={<EditOutlined />} onClick={handleEdit}>
          Chỉnh sửa
        </Button>
      </Tooltip>
      <Tooltip title="Xóa">
        <Button danger icon={<DeleteOutlined />} onClick={showDeleteConfirm}>
          Xóa
        </Button>
      </Tooltip>
    </Space>
  );

  return (
    <>
      <PageHeader
        title={`Chi tiết khách hàng ${customer?.fullName}`}
        breadcrumb={[
          { title: "Trang chủ", path: "/admin/dashboard" },
          { title: "Khách hàng", path: "/admin/customers" },
          { title: customer?.fullName || "Chi tiết" },
        ]}
        extra={extra}
      />
      {loading ? (
        <Card>
          <div style={{ textAlign: "center", padding: 50 }}>
            <Spin size="large" />{" "}
          </div>{" "}
        </Card>
      ) : customer ? (
        <>
          {" "}
          <Card style={{ marginBottom: 24 }}>
            {" "}
            <Row gutter={[24, 24]}>
              {" "}
              <Col span={24} md={18}>
                {" "}
                <Title level={4}>{customer.fullName}</Title>{" "}
                <Space size={16}>
                  {" "}
                  <Text>
                    {" "}
                    <PhoneOutlined /> {customer.phone}{" "}
                  </Text>{" "}
                  <Text>
                    {" "}
                    <MailOutlined /> {customer.email}{" "}
                  </Text>{" "}
                </Space>{" "}
                <div style={{ marginTop: 16 }}>
                  {" "}
                  {customer.stage && <StageTag stage={customer.stage.name || "Unknown"} />}{" "}
                </div>{" "}
              </Col>{" "}
              <Col span={24} md={6}>
                {" "}
                <Descriptions column={1} size="small">
                  {" "}
                  <Descriptions.Item label="Nguồn">
                    {" "}
                    {customer.source}{" "}
                  </Descriptions.Item>{" "}
                  <Descriptions.Item label="Agent phụ trách">
                    {" "}
                    {customer.agent?.username}{" "}
                  </Descriptions.Item>{" "}
                  <Descriptions.Item label="Ngày tạo">
                    {" "}
                    {new Date(customer?.createdAt ||'').toLocaleDateString()}{" "}
                  </Descriptions.Item>{" "}
                </Descriptions>{" "}
              </Col>{" "}
            </Row>{" "}
          </Card>{" "}
          <Tabs defaultActiveKey="notes">
            {" "}
            <TabPane tab="Ghi chú" key="notes">
              {" "}
              <NotesSection customerId={id as string} />{" "}
            </TabPane>{" "}
            <TabPane tab="Lịch sử" key="timeline">
              {" "}
              <EntityTimeline
                entityId={id as string}
                entityType="customer"
              />{" "}
            </TabPane>{" "}
            <TabPane tab="Giao dịch" key="deals">
              {" "}
              {/* Component hiển thị giao dịch liên quan */}{" "}
              <Card>
                {" "}
                <p>Danh sách giao dịch liên quan sẽ hiển thị ở đây</p>{" "}
              </Card>{" "}
            </TabPane>{" "}
          </Tabs>{" "}
        </>
      ) : (
        <Card>
          {" "}
          <div style={{ textAlign: "center", padding: 50 }}>
            {" "}
            <Text type="danger">Không tìm thấy khách hàng </Text>{" "}
          </div>{" "}
        </Card>
      )}{" "}
    </>
  );
}
