import React from 'react';
import { ProForm, ProFormTextArea } from '@ant-design/pro-components';
import { Button, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface NotesFormProps {
  entityId: string;
  entityType: 'customer' | 'property' | 'deal' | 'task';
  onSuccess?: () => void;
}

const NotesForm: React.FC<NotesFormProps> = ({ entityId, entityType, onSuccess }) => {
  const [form] = ProForm.useForm();

  const handleSubmit = async (values: { content: string }) => {
    try {
      // API call để lưu note
      await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: values.content,
          entityId,
          entityType
        }),
      });

      message.success('Thêm ghi chú thành công!');
      form.resetFields();
      if (onSuccess) onSuccess();
    } catch (error) {
      message.error('Không thể thêm ghi chú. Vui lòng thử lại sau.');
    }
  };

  return (
    <Card
      title="Thêm ghi chú"
      size="small"
      bordered={false}
      style={{ marginBottom: 16 }}
    >
      <ProForm
        form={form}
        onFinish={handleSubmit}
        submitter={{
          render: (props) => (
            <Button 
              type="primary" 
              onClick={() => props.form?.submit()} 
              icon={<PlusOutlined />}
            >
              Thêm ghi chú
            </Button>
          ),
        }}
      >
        <ProFormTextArea
          name="content"
          placeholder="Nhập ghi chú mới..."
          rules={[{ required: true, message: 'Vui lòng nhập nội dung ghi chú' }]}
        />
      </ProForm>
    </Card>
  );
};

export default NotesForm;
