import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, message, notification } from 'antd';
import { LockOutlined, IdcardOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../constants/constant';

const { Title, Paragraph } = Typography;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(AppRoutes.signup, {
        name: values.name,
        email: values.email,
        cnic: values.cnic,
        password: values.password,
      });

      setLoading(false);
      if (response.status === 200) {
        const token = response.data.data.token;
        const user = {
          name: values.name,
          email: values.email,
          cnic: values.cnic,
        };

        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        notification.success({ message: 'Sign Up Successfully' });
        navigate('/user/dashboard');
      }
    } catch (error) {
      setLoading(false);
      const errorMsg = error.response?.data?.msg || 'An unexpected error occurred.';

      if (error.response?.status === 403) {
        notification.error({ message: 'Registration Failed', description: errorMsg });
      } else if (error.response?.status === 500) {
        notification.error({ message: 'Server Error', description: errorMsg });
      } else {
        message.error('Something went wrong, please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <Card className="shadow-2xl w-full max-w-md rounded-lg p-8 border border-gray-200 bg-white">
        <div className="text-center mb-6">
          <Title level={1} className="text-[#0072BB] font-normal">
            <span className="text-[#8AC441] underline">Create</span> <span className="text-[#0072BB] underline">Account</span>
          </Title>
          <Paragraph className="text-gray-600">Sign up by providing the required details</Paragraph>
        </div>
        <Form name="signup" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            name="cnic"
            label="CNIC"
            rules={[{ required: true, message: 'Please enter your CNIC!' }]}
          >
            <Input prefix={<IdcardOutlined />} placeholder="Enter CNIC (e.g. 42101-1234567-1)" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <div className="text-center mt-3">
              <Button type="link" onClick={() => navigate('/login')}>
                Already have an Account?
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
