import React from "react";
import { Menu, Dropdown, Button, Image, notification, Layout, Typography } from "antd";
import { DollarCircleOutlined, DownOutlined, FileTextOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/constant";
import axios from "axios";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";

const { Title } = Typography;

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

  let user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            background: "#001529",
            color: "#fff",
          }}
        >
          <div className="logo" style={{ padding: "20px", textAlign: "center", color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
            <Image
              src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
              preview={false}
              alt="Saylani Welfare Logo"
              style={{ height: "90px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{ background: "transparent" }}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={"/user/dashboard"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              <Link to={"/user/applyForLoan"}>Apply For Loan</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DollarCircleOutlined />}>
              Loan Status
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />} style={{ marginTop: "280px", color: "#ff4d4f" }} onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          {/* Header */}
          <Header style={{ backgroundColor: "#fff", padding: "20px", boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
            <Title level={3} style={{ color: "#0072BB", margin: 0, fontSize: "24px" }}>
              Welcome {user?.name || "Guest"}
            </Title>
          </Header>
          <main style={{ background: "#f0f2f5", minHeight: "100vh" }}>
            <Outlet />
          </main>
        </Layout>
      </Layout>
    </div>
  );
};

export default Navbar;
