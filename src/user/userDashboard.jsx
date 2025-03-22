// import React from 'react';
// import { Breadcrumb, Card, Table, Statistic, Row, Col, Descriptions, Typography } from 'antd';
// import { DollarOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

// const { Title } = Typography;

// const loanData = [
//   { key: '1', category: 'Home Loan', applied: 120, approved: 80, rejected: 40 },
//   { key: '2', category: 'Car Loan', applied: 90, approved: 50, rejected: 40 },
//   { key: '3', category: 'Personal Loan', applied: 150, approved: 100, rejected: 50 },
// ];

// const availableLoans = [
//   { key: '1', type: 'Home Loan', interest: '5.0%', duration: '20 Years' },
//   { key: '2', type: 'Car Loan', interest: '7.2%', duration: '5 Years' },
//   { key: '3', type: 'Personal Loan', interest: '10.5%', duration: '3 Years' },
// ];

// const columns = [
//   { title: 'Category', dataIndex: 'category', key: 'category' },
//   { title: 'Applied', dataIndex: 'applied', key: 'applied' },
//   { title: 'Approved', dataIndex: 'approved', key: 'approved' },
//   { title: 'Rejected', dataIndex: 'rejected', key: 'rejected' },
// ];

// const loanColumns = [
//   { title: 'Loan Type', dataIndex: 'type', key: 'type' },
//   { title: 'Interest Rate', dataIndex: 'interest', key: 'interest' },
//   { title: 'Duration', dataIndex: 'duration', key: 'duration' },
// ];

// const UserDashboard = () => {
//   return (
//     <div style={{ padding: '24px', background: '#f0f2f5', fontFamily: 'Arial, sans-serif' }}>
//       <Breadcrumb style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
//       </Breadcrumb>
//       <Title level={2} style={{ marginBottom: '20px', color: '#1890ff', textAlign: 'center' }}>Loan Dashboard</Title>
//       <Row gutter={[16, 16]} justify="center">
//         {[{
//           title: 'Total Applied', value: 360, icon: <DollarOutlined />, color: '#1890ff'
//         }, {
//           title: 'Total Approved', value: 230, icon: <CheckCircleOutlined />, color: '#52c41a'
//         }, {
//           title: 'Total Rejected', value: 130, icon: <CloseCircleOutlined />, color: '#ff4d4f'
//         }].map(({ title, value, icon, color }, index) => (
//           <Col key={index} span={8}>
//             <Card style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', textAlign: 'center' }}>
//               <Statistic title={title} value={value} prefix={icon} valueStyle={{ color }} />
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
//         <Col span={12}>
//           <Card title="Loan Repayment Details" style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
//             <Table dataSource={loanData} columns={columns} pagination={false} bordered />
//           </Card>
//         </Col>
//         <Col span={12}>
//           <Card title="Complete Loan Details" style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
//             <Descriptions bordered column={1}>
//               <Descriptions.Item label="Total Loan Amount">$500,000</Descriptions.Item>
//               <Descriptions.Item label="Interest Rate">5.5% per annum</Descriptions.Item>
//               <Descriptions.Item label="Loan Duration">10 Years</Descriptions.Item>
//               <Descriptions.Item label="Monthly Installment">$4,200</Descriptions.Item>
//               <Descriptions.Item label="Remaining Balance">$200,000</Descriptions.Item>
//               <Descriptions.Item label="Next Payment Due">March 15, 2025</Descriptions.Item>
//             </Descriptions>
//           </Card>
//         </Col>
//       </Row>
//       <Card title="Available Loans" style={{ marginTop: '24px', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
//         <Table dataSource={availableLoans} columns={loanColumns} pagination={false} bordered />
//       </Card>
//     </div>
//   );
// };

// export default UserDashboard;



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
