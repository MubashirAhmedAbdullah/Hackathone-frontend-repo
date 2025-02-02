import React from 'react';
import { Card, Breadcrumb, Typography, Descriptions, Button, Tag, Divider } from 'antd';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CheckCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoanDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const loan = location.state?.loan;

  if (!loan) {
    return <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '16px', color: '#ff4d4f' }}>No loan details available.</div>;
  }

  return (
    <div style={{ padding: '40px', background: '#f0f2f5', fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '90%' }}>
        <Breadcrumb style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>
          <Breadcrumb.Item onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#1890ff' }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => navigate('/loans')} style={{ cursor: 'pointer', color: '#1890ff' }}>Loans</Breadcrumb.Item>
          <Breadcrumb.Item>{loan.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Card style={{ borderRadius: '16px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', padding: '30px', background: '#ffffff' }}>
          <Title level={2} style={{ color: '#1890ff', textAlign: 'center', fontWeight: 'bold' }}>{loan.name} Details</Title>
          <Divider />
          <Descriptions bordered column={1} size="middle" labelStyle={{ fontWeight: 'bold', background: '#f0f2f5', padding: '10px', fontSize: '16px' }} contentStyle={{ padding: '10px', fontSize: '16px' }}>
            <Descriptions.Item label="Loan Name">{loan.name}</Descriptions.Item>
            <Descriptions.Item label="Loan Amount">{loan.amount}</Descriptions.Item>
            <Descriptions.Item label="Remaining Repay Amount">
              <Tag color={loan.remaining === '$0' ? 'green' : 'volcano'} style={{ fontSize: '14px', padding: '4px 8px' }}>{loan.remaining}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Installment Amount">{loan.installment}</Descriptions.Item>
            <Descriptions.Item label="Interest Rate"><Tag color="blue" style={{ fontSize: '14px', padding: '4px 8px' }}>{loan.interest}</Tag></Descriptions.Item>
            <Descriptions.Item label="Loan Duration"><Tag color="purple" style={{ fontSize: '14px', padding: '4px 8px' }}>{loan.duration}</Tag></Descriptions.Item>
          </Descriptions>
          <Divider />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button type="primary" size="medium" icon={<ArrowLeftOutlined />} onClick={() => navigate('/user/myloans')}>
              Back to Loans
            </Button>
            {loan.remaining === '$0' && (
              <Button type="success" size="medium" style={{ marginLeft: '10px' }} icon={<CheckCircleOutlined />}>
                Paid Off
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoanDetails;
