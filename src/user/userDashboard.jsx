import React from 'react';
import { Breadcrumb, Card, Table, Statistic, Row, Col, Descriptions, Typography } from 'antd';
import { DollarOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const loanData = [
  { key: '1', category: 'Home Loan', applied: 120, approved: 80, rejected: 40 },
  { key: '2', category: 'Car Loan', applied: 90, approved: 50, rejected: 40 },
  { key: '3', category: 'Personal Loan', applied: 150, approved: 100, rejected: 50 },
];

const availableLoans = [
  { key: '1', type: 'Home Loan', interest: '5.0%', duration: '20 Years' },
  { key: '2', type: 'Car Loan', interest: '7.2%', duration: '5 Years' },
  { key: '3', type: 'Personal Loan', interest: '10.5%', duration: '3 Years' },
];

const columns = [
  { title: 'Category', dataIndex: 'category', key: 'category' },
  { title: 'Applied', dataIndex: 'applied', key: 'applied' },
  { title: 'Approved', dataIndex: 'approved', key: 'approved' },
  { title: 'Rejected', dataIndex: 'rejected', key: 'rejected' },
];

const loanColumns = [
  { title: 'Loan Type', dataIndex: 'type', key: 'type' },
  { title: 'Interest Rate', dataIndex: 'interest', key: 'interest' },
  { title: 'Duration', dataIndex: 'duration', key: 'duration' },
];

const UserDashboard = () => {
  return (
    <div style={{ padding: '24px', background: '#f0f2f5', fontFamily: 'Arial, sans-serif' }}>
      <Breadcrumb style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2} style={{ marginBottom: '20px', color: '#1890ff', textAlign: 'center' }}>Loan Dashboard</Title>
      <Row gutter={[16, 16]} justify="center">
        {[{
          title: 'Total Applied', value: 360, icon: <DollarOutlined />, color: '#1890ff'
        }, {
          title: 'Total Approved', value: 230, icon: <CheckCircleOutlined />, color: '#52c41a'
        }, {
          title: 'Total Rejected', value: 130, icon: <CloseCircleOutlined />, color: '#ff4d4f'
        }].map(({ title, value, icon, color }, index) => (
          <Col key={index} span={8}>
            <Card style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', textAlign: 'center' }}>
              <Statistic title={title} value={value} prefix={icon} valueStyle={{ color }} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col span={12}>
          <Card title="Loan Repayment Details" style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
            <Table dataSource={loanData} columns={columns} pagination={false} bordered />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Complete Loan Details" style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Total Loan Amount">$500,000</Descriptions.Item>
              <Descriptions.Item label="Interest Rate">5.5% per annum</Descriptions.Item>
              <Descriptions.Item label="Loan Duration">10 Years</Descriptions.Item>
              <Descriptions.Item label="Monthly Installment">$4,200</Descriptions.Item>
              <Descriptions.Item label="Remaining Balance">$200,000</Descriptions.Item>
              <Descriptions.Item label="Next Payment Due">March 15, 2025</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
      <Card title="Available Loans" style={{ marginTop: '24px', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
        <Table dataSource={availableLoans} columns={loanColumns} pagination={false} bordered />
      </Card>
    </div>
  );
};

export default UserDashboard;
