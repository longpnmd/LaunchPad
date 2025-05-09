import React, { useState, useEffect } from 'react';
import {
  ProForm,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Card, message } from 'antd';
import { useRouter } from 'next/router';

interface CustomerFormProps {
  id?: string; // Nếu có id thì là chỉnh sửa, không có là thêm mới
}

interface ClientStage {
  id: string;
  name: string;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ id }) => {
  const router = useRouter();
  const [form] = ProForm.useForm();
  const [loading, setLoading] = useState(false);
  const [stages, setStages] = useState<ClientStage[]>([]);
  const [agents, setAgents] = useState<{ label: string; value: string }[]>([]);

  // Lấy danh sách stages và agents khi component được mount
  useEffect(() => {
    const fetchStagesAndAgents = async () => {
      try {
        const [stagesRes, agentsRes] = await Promise.all([
          fetch('/api/client-stages'),
          fetch('/api/users?filters[role.type]=agent')
        ]);

        const stagesData = await stagesRes.json();
        const agentsData = await agentsRes.json();

        setStages(stagesData.data || []);
        setAgents(
          agentsData.data?.map((agent: any) => ({
            label: agent.attributes.username,
            value: agent.id
          })) || []
        );
      } catch (error) {
        message.error('Không thể tải dữ liệu. Vui lòng thử lại sau.');
      }
    };

    fetchStagesAndAgents();
  }, []);

  // Nếu là chỉnh sửa, tải dữ liệu khách hàng
  useEffect(() => {
    if (id) {
      const fetchCustomer = async () => {
        try {
          setLoading(true);
          const res = await fetch(`/api/customers/${id}`);
          const data = await res.json();
          
          if (data.data) {
            const customer = data.data;
            form.setFieldsValue({
              name: customer.attributes.name,
              email: customer.attributes.email,
              phone: customer.attributes.phone,
              source: customer.attributes.source,
              stage: customer.attributes.stage?.data?.id,
              agent: customer.attributes.agent?.data?.id,
              notes: customer.attributes.notes,
            });
          }
        } catch (error) {
          message.error('Không thể tải thông tin khách hàng.');
        } finally {
          setLoading(false);
        }
      };

      fetchCustomer();
    }
  }, [id, form]);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      const method = id ? 'PUT' : 'POST';
      const url = id ? `/api/customers/${id}` : '/api/customers';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: values }),
      });

      if (!response.ok) {
        throw new Error('Không thể lưu dữ liệu.');
      }

      message.success(id ? 'Cập nhật thành công!' : 'Thêm khách hàng thành công!');
      router.push('/admin/customers');
    } catch (error) {
      message.error('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <ProForm
        form={form}
        onFinish={handleSubmit}
        submitter={{
          searchConfig: {
            submitText: id ? 'Cập nhật' : 'Tạo mới',
          },
          resetButtonProps: {
            style: { display: 'none' },
          },
        }}
        initialValues={{
          source: 'Website',
        }}
        loading={loading}
      >
        <ProFormText
          name="name"
          label="Họ tên"
          placeholder="Nhập họ tên khách hàng"
          rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
        />
        <ProFormText
          name="email"
          label="Email"
          placeholder="example@domain.com"
          rules={[
            { required: true, message: 'Vui lòng nhập email' },
            { type: 'email', message: 'Email không hợp lệ' },
          ]}
        />
        <ProFormText
          name="phone"
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
        />
        <ProFormSelect
          name="source"
          label="Nguồn"
          options={[
            { label: 'Website', value: 'Website' },
            { label: 'Giới thiệu', value: 'Referral' },
            { label: 'Mạng xã hội', value: 'Social' },
            { label: 'Khác', value: 'Other' },
          ]}
          rules={[{ required: true, message: 'Vui lòng chọn nguồn' }]}
        />
        <ProFormSelect
          name="stage"
          label="Giai đoạn"
          options={stages.map(stage => ({
            label: stage.name,
            value: stage.id,
          }))}
          rules={[{ required: true, message: 'Vui lòng chọn giai đoạn' }]}
        />
        <ProFormSelect
          name="agent"
          label="Agent phụ trách"
          options={agents}
          rules={[{ required: true, message: 'Vui lòng chọn agent phụ trách' }]}
        />
        <ProFormTextArea
          name="notes"
          label="Ghi chú"
          placeholder="Nhập ghi chú về khách hàng"
        />
      </ProForm>
    </Card>
  );
};

export default CustomerForm;
