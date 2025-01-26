import React, { useState } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppRoutes } from '../constant/constant';  // Your routes for API calls

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Direct login request without email existence check
      const loginResponse = await axios.post(AppRoutes.login, values);

      // Debug log to see the response structure
      console.log("Login Response:", loginResponse);

      if (loginResponse.status === 200) {
        // Assuming the backend returns a token and user data
        const { token, user } = loginResponse.data;

        if (token && user) {
          // Save the token in localStorage (if you need session management)
          localStorage.setItem('authToken', token);

          // Save the user data in localStorage
          localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage

          // Show success notification
          notification.success({
            message: 'Success',
            description: 'You have successfully logged in!',
            placement: 'topRight',
            duration: 3,
          });

          // Redirect to home page
          navigate('/');  // Reduced the delay before redirecting for a faster user experience
        } else {
          // If token or user is missing in the response, show an error
          notification.error({
            message: 'Error',
            description: 'Missing token or user data. Please try again.',
            placement: 'topRight',
            duration: 3,
          });
        }
      } else {
        // Incorrect credentials
        notification.error({
          message: 'Invalid credentials',
          description: 'Incorrect email or password. Please try again.',
          placement: 'topRight',
          duration: 3,
        });
      }
    } catch (error) {
      console.error('Error during login process:', error);

      // General error notification in case something goes wrong
      notification.error({
        message: 'Error',
        description: 'An error occurred during the login process. Please try again.',
        placement: 'topRight',
        duration: 3,
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Login to Your Account</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-8" // Increased spacing between elements
        >
          {/* Email Input */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }]}
          >
            <Input placeholder="Enter your email" style={{ height: '50px', fontSize: '16px' }} />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" style={{ height: '50px', fontSize: '16px' }} />
          </Form.Item>

          {/* Login Button */}
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            style={{
              backgroundColor: '#8ac642',
              borderColor: '#8ac642',
              fontWeight: 'bold',
              height: '50px', // Increased button height
              fontSize: '18px', // Increased button text size
            }}
          >
            Login
          </Button>
        </Form>

        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">
              Create an Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
