import React from 'react';
import { Table, Card, Breadcrumb, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const loanData = [
  { id: '1', name: 'Home Loan', amount: '$200,000', remaining: '$50,000', installment: '$1,500', interest: '5.5%', duration: '15 Years' },
  { id: '2', name: 'Car Loan', amount: '$50,000', remaining: '$10,000', installment: '$600', interest: '7.2%', duration: '5 Years' },
  { id: '3', name: 'Personal Loan', amount: '$20,000', remaining: '$5,000', installment: '$400', interest: '10.5%', duration: '3 Years' },
];

const UserLoans = () => {
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    navigate(`/user/loandetails/${record.id}`, { state: { loan: record } });
  };

  const columns = [
    { title: 'Loan Name', dataIndex: 'name', key: 'name', render: (text, record) => <p onClick={() => handleRowClick(record)} className='text-blue-500 cursor-pointer'>{text}</p> },
    { title: 'Loan Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Remaining Repay Amount', dataIndex: 'remaining', key: 'remaining' },
    { title: 'Installment Amount', dataIndex: 'installment', key: 'installment' },
    { title: 'Interest Rate', dataIndex: 'interest', key: 'interest' },
    { title: 'Loan Duration', dataIndex: 'duration', key: 'duration' },
  ];

  return (
    <div style={{ padding: '24px', background: '#f0f2f5', fontFamily: 'Arial, sans-serif' }}>
      <Breadcrumb style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Loans</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2} style={{ marginBottom: '20px', color: '#1890ff', textAlign: 'center' }}>Loan Details</Title>
      <Card style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
        <Table dataSource={loanData} columns={columns} pagination={false} bordered rowKey="key" />
      </Card>
    </div>
  );
};

export default UserLoans;
