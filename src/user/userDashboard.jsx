import React from "react";
import { Layout, Menu, Card, Button, Table, Typography, Statistic, Row, Col } from "antd";
import { DollarCircleOutlined, FileTextOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const loans = [
  {
    key: "1",
    loanType: "Home Loan",
    amount: "$50,000",
    status: "Approved",
  },
  {
    key: "2",
    loanType: "Personal Loan",
    amount: "$10,000",
    status: "Pending",
  },
  {
    key: "3",
    loanType: "Car Loan",
    amount: "$20,000",
    status: "Rejected",
  },
];

const columns = [
  {
    title: "Loan Type",
    dataIndex: "loanType",
    key: "loanType",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = status === "Approved" ? "green" : status === "Pending" ? "orange" : "red";
      return <Text style={{ color, fontWeight: "bold" }}>{status}</Text>;
    },
  },
];

const Dashboard = () => {
  return (
    <Content style={{ margin: "20px", padding: "20px", background: "#f0f2f5", borderRadius: "10px" }}>
          <Row gutter={[16, 16]}>
            {/* Loan Overview Cards */}
            <Col span={8}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  bordered={false}
                  style={{
                    background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Statistic
                    title="Total Loans Applied"
                    value={5}
                    prefix={<FileTextOutlined />}
                    valueStyle={{ color: "#0072BB" }}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col span={8}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  bordered={false}
                  style={{
                    background: "linear-gradient(135deg, #C8E6C9, #A5D6A7)",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Statistic
                    title="Approved Loans"
                    value={2}
                    prefix={<DollarCircleOutlined />}
                    valueStyle={{ color: "#388E3C" }}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col span={8}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  bordered={false}
                  style={{
                    background: "linear-gradient(135deg, #FFCDD2, #FFABAB)",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Statistic
                    title="Rejected Loans"
                    value={1}
                    prefix={<FileTextOutlined />}
                    valueStyle={{ color: "#D32F2F" }}
                  />
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Loan Status Table */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card
              title="Loan Status"
              style={{
                marginTop: "20px",
                borderRadius: "15px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                background: "#fff",
              }}
            >
              <Table columns={columns} dataSource={loans} pagination={false} />
            </Card>
          </motion.div>

          {/* Apply for Loan Button */}
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Link to="/apply-loan">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: "linear-gradient(135deg, #0072BB, #0091D5)",
                    borderRadius: "50px",
                    padding: "15px 30px",
                    fontSize: "18px",
                    border: "none",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Apply for a Loan
                </Button>
              </motion.div>
            </Link>
          </div>
        </Content>
  );
};

export default Dashboard;
