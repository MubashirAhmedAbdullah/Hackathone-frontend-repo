import React from "react";
import { Menu, Dropdown, Button, Image, notification, Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { AppRoutes } from "../../constants/constant";
import axios from "axios";
import Sider from "antd/es/layout/Sider";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      if (!token) {
        notification.error({
          message: "No authentication token found. Please log in.",
        });
        return;
      }

      const response = await axios.post(
        AppRoutes.logout,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response==>", response);

      if (response.status === 200) {
        localStorage.clear();
        notification.success({
          message: "Logged out successfully",
        });
        navigate("/");
      } else {
        notification.error({
          message: "An error occurred during logout",
        });
      }
    } catch (err) {
      console.error("Logout error:", err);
      notification.error({
        message: "Please try again later",
      });
    }
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="#">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">About Us</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">Services</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">Contact</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          background: "linear-gradient(135deg, #0072BB 0%, #0091D5 100%)",
          color: "#fff",
        }}
      >
        <div className="logo" style={{ padding: "20px", textAlign: "center", color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
          Loan Dashboard
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{ background: "transparent" }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            My Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            Loan Applications
          </Menu.Item>
          <Menu.Item key="3" icon={<DollarCircleOutlined />}>
            Loan Status
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />} style={{ marginTop: "200px", color: "#ff4d4f" }}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ backgroundColor: "#fff", padding: "20px", boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
          <Title level={3} style={{ color: "#0072BB", margin: 0, fontSize: "24px" }}>
            Welcome, User
          </Title>
        </Header>
      </Layout>
    </Layout>

      {/* Main content */}
      <main className="bg-gray-100 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navbar;
