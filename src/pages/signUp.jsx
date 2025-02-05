import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, message, notification } from 'antd';
import { LockOutlined, IdcardOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../constants/constant';
// import { useHistory } from 'react-router-dom'; // Import useHistory for redirection



const { Title, Paragraph } = Typography;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  // const history = useHistory(); // History hook for redirection

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }
    setLoading(true);

    console.log('values==>', values);

    try {
      // Send a POST request to your backend API
      const response = await axios.post(AppRoutes.signup, {
        name: values.name,
        email: values.email,
        cnic: values.cnic,
        password: values.password,
      });

      console.log('response==>', response);


      setLoading(false)
      if (response.status === 200) {
        const token = response.data.data.token;
        const user = {
          name: values.name,
          email: values.email,
          cnic: values.cnic,
        };

        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user)); // Store user data as a string

        notification.success({
          message: "signUp sucessfully"
        })
        navigate("/user/dashboard")
      }

      // if (response.status === 403) {
      //   // If the error status is 403 (Forbidden - User already exists)
      //   notification.error({
      //     message: 'Sign Up Failed',
      //     description: 'User with this email or CNIC already exists.',
      //     placement: 'topRight',
      //   });
      //   setLoading(false)
      // }

      // setLoading(false);
      // if (response.status === 200) {
      //   // Save the JWT token to localStorage
      //   const token = response.data.data.token; // Assuming the token is returned as 'token'
      //   const user = {
      //     name: values.name,
      //     email: values.email,
      //     cnic: values.cnic,
      //   };

      //   // Save both the JWT token and user data to localStorage
      //   localStorage.setItem('jwtToken', token);
      //   localStorage.setItem('user', JSON.stringify(user)); // Store user data as a string

      //   notification.success({
      //     message: "signUp sucessfully"
      //   })
      //   navigate("/user/dashboard")
      // } else {
      //   message.error('Something went wrong, please try again.');
      // }
    } catch (error) {
      setLoading(false);
      
      if (error.status === 403) { notification.error({ message: "Registration Failed", description: error.response.data.msg, placement: "topRight" }) }
      if (error.status === 500) { notification.error({ message: "Registration Failed", description: error.response.data.msg, placement: "topRight" }) }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <Card className="shadow-2xl w-full max-w-md rounded-lg p-8 border border-gray-200 bg-white">
        <div className="text-center mb-6">
          <Title level={1} className="text-[#0072BB] font-normal">
            <span className="text-[#8AC441] underline">Create</span> <span className="text-[#0072BB] underline">Account</span>
          </Title>
          <Paragraph className="text-gray-600">
            <span className="text-base">Sign up by providing the required details</span>
          </Paragraph>
        </div>
        <Form name="signup" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label={<span className="text-gray-700 text-lg">Full Name</span>}
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input prefix={<UserOutlined className="text-lg" />} placeholder="Enter Full Name" className="rounded-md p-3 text-lg border-gray-300" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-gray-700 text-lg">Email</span>}
            rules={[{ required: true, type: 'text', message: 'Please enter a valid email!' }]}
          >
            <Input prefix={<MailOutlined className="text-lg" />} placeholder="Enter Email" className="rounded-md p-3 text-lg border-gray-300" />
          </Form.Item>
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
          <Form.Item
            name="confirmPassword"
            label={<span className="text-gray-700 text-lg">Confirm Password</span>}
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password prefix={<LockOutlined className="text-lg" />} placeholder="Confirm Password" className="rounded-md p-3 text-lg border-gray-300" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{ fontSize: '20px', height: '40px' }}
              className="bg-[#0072BB] hover:bg-[#005f8c] transition duration-300 ease-in-out text-white py-3 rounded-md"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <div className="text-center mt-3">
              <Button
                type="link"
                style={{ fontSize: '15px' }}
                onClick={() => history.push('/login')} // Redirect to login page
              >
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
