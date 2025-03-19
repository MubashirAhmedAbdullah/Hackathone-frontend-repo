import React, { useState } from 'react';
import { Card, Form, Input, Button, Checkbox, Typography, notification } from 'antd';
import { LockOutlined, IdcardOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppRoutes } from '../constants/constant';

const { Title, Paragraph } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    console.log("values==>", values);

    try {
      const response = await axios.post(AppRoutes.login, {
        cnic: values.cnic,
        password: values.password
      });

      console.log("response===>", response);
      setLoading(false);

      if (response.status === 403) {
        notification.error({
          message: "Invalid Credentials",
          description: "The CNIC or password is incorrect.",
        });
        return;
      }

      if (response.status === 404) {
        notification.error({
          message: "You Are Not Registered",
        });
        return;
      }

      // Save JWT token and user data to localStorage
      localStorage.setItem("jwtToken", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      notification.success({
        message: response.data.msg || "Login Successful",
      });

      navigate("/user/dashboard"); // Redirect to the home page or user dashboard

    } catch (err) {
      setLoading(false);
      console.log("error===>", err);

      if (err.response) {
        if (err.response.status === 500) {
          notification.error({
            message: "Internal Server Error Try Again",
          });
        } else if (err.response.status === 404) {
          notification.error({
            message: "User Not Found",
          });
        } else {
          notification.error({
            message: "An error occurred. Please try again.",
          });
        }
      } else {
        notification.error({
          message: "Network error. Please check your connection.",
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <Card className="shadow-2xl w-full max-w-md rounded-lg p-8 border border-gray-200 bg-white">
        <div className="text-center mb-6">
          <Title level={1} className="text-[#0072BB] font-normal">
            <span className='text-[#8AC441] underline'>Welcome</span>
            <span className='text-[#0072BB] underline'> Back</span>
          </Title>
          <Paragraph className="text-gray-600">
            <span className='text-base'>Login using your CNIC and password to continue</span>
          </Paragraph>
        </div>
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="cnic"
            label={<span className="text-gray-700 text-lg">CNIC</span>}
            rules={[{ required: true, message: 'Please enter your CNIC!' }]}
          >
            <Input prefix={<IdcardOutlined className="text-lg" />} placeholder="Enter CNIC (e.g. 42101-1234567-1)" className="rounded-md p-3 text-lg border-gray-300" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="text-gray-700 text-lg">Password</span>}
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password prefix={<LockOutlined className="text-lg" />} placeholder="Enter Password" className="rounded-md p-3 text-lg border-gray-300" />
          </Form.Item>
          <Form.Item>
            <div className="flex justify-between items-center">
              <Checkbox className="text-gray-700 text-lg">Remember Me</Checkbox>
              <a className="text-[#0072BB] hover:underline text-lg">Forgot Password?</a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{ fontSize: "20px", height: "40px" }}
              className="bg-[#0072BB] hover:bg-[#005f8c] transition duration-300 ease-in-out text-white py-3 rounded-md"
            >
              Login
            </Button>

            <div className='text-center mt-3'>
              <Link to={"/signUp"}>
                <Button type='link' style={{ fontSize: "15px" }}> Don't have an Account?</Button>
              </Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
