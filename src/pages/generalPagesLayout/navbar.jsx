import React from "react";
import { Menu, Dropdown, Button, Image } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import { AppRoutes } from "../../constants/constant";
import axios from "axios";


const Navbar = () => {


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
        location.reload()
        // navigate("/");
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
        <Link href="#">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#">About Us</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#">Services</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#">Contact</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <nav className="bg-gray-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className=""><Image src="https://student.saylaniwelfare.com/assets/logo-OpazD70S.png" height={60} preview={false} /></div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link to={"/"} className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to={"aboutUs"} className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link to={"services"} className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
              Services
            </Link>
            {/* <Link to={"contactUs"} className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
              Contact
            </Link> */}

            {
              localStorage.getItem("jwtToken") ? (
                <Button onClick={handleLogout()} style={{background: "red", color:"#fff", fontSize: "16px", fontWeight: "inherit", width: "80px"}}>Logout</Button>
              ) : (
                <Link to={"/login"}>
                <Button style={{background: "#8AC441", color:"#fff", fontSize: "16px", fontWeight: "inherit", width: "80px"}}>Login</Button>
                </Link>
              )
            }

          </div>

          {/* Dropdown for smaller screens */}
          <div className="md:hidden">
            <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
              <Button type="text" className="text-gray-700 text-lg font-semibold flex items-center">
                Menu <DownOutlined className="ml-2" />
              </Button>
            </Dropdown>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="bg-gray-100 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navbar;
