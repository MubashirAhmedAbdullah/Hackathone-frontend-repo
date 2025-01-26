import React, { useState } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { AppRoutes } from '../constant/constant';

const SignUpPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Ensure useNavigate is correctly initialized

    const handleSubmit = async (values) => {
    setLoading(true);
    try {
        // Replace with the correct URL for your backend
        const response = await axios.post(AppRoutes.signup, values);

        // Debugging: Log the response to verify its structure
        console.log('Backend Response:', response);

        // Check if the token exists in the response
        const { token, user } = response.data.data || {}; // Use optional chaining and fallback
        if (token) {
            // Save token and user data to localStorage and Cookies
            localStorage.setItem('user', JSON.stringify(user)); // Save user data in localStorage
            localStorage.setItem('authToken', token); // Save token in localStorage
            Cookies.set('authToken', token, { expires: 7 }); // Set token to expire in 7 days in cookies

            // Show success toast notification
            notification.success({
                message: 'Success',
                description: 'User is successfully signed up!',
                placement: 'topRight',
                duration: 3, // Duration of the toast
            });

            // Wait for a moment to let the user see the notification before redirecting
            setTimeout(() => {
                navigate('/'); // Redirect to home after the notification
            }, 1500); // 1.5-second delay to show the toast before navigating
        } else {
            // Handle missing token case
            throw new Error('Token not found in response. Please check the backend.');
        }
    } catch (error) {
        console.error('Error during signup:', error);

        // Show error toast notification if the signup fails
        notification.error({
            message: 'Error',
            description: error.response?.data?.message || 'An error occurred while signing up. Please try again.',
            placement: 'topRight',
            duration: 3, // Duration of the error toast
        });
    } finally {
        setLoading(false); // Stop the loading indicator
    }
};


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Create Your Account</h2>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="space-y-8" // Increased spacing between form elements
                >
                    {/* Name Input */}
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Enter your name" style={{ height: '50px', fontSize: '16px' }} />
                    </Form.Item>

                    {/* Email Input */}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please input a valid email!' }
                        ]}
                    >
                        <Input placeholder="Enter your email" style={{ height: '50px', fontSize: '16px' }} />
                    </Form.Item>

                    {/* CNIC Input */}
                    <Form.Item
                        label="CNIC"
                        name="cnic"
                        rules={[{ required: true, message: 'Please input your CNIC!' }]}
                    >
                        <Input placeholder="Enter your CNIC" style={{ height: '50px', fontSize: '16px' }} />
                    </Form.Item>

                    {/* Password Input */}
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Enter your password" style={{ height: '50px', fontSize: '16px' }} />
                    </Form.Item>

                    {/* Sign Up Button */}
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                        style={{
                            backgroundColor: '#8ac642',
                            borderColor: '#8ac642',
                            fontWeight: 'bold',
                            height: '50px', // Increased height
                            fontSize: '18px', // Increased font size
                        }}
                    >
                        Sign Up
                    </Button>
                </Form>

                {/* Already have an account Link */}
                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-600 font-semibold hover:underline">
                            Login Here
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
