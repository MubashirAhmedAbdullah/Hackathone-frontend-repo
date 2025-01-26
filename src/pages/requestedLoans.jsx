import React, { useState, useEffect } from 'react';
import { Table, Button, notification } from 'antd';
import axios from 'axios';
import { AppRoutes } from '../constant/constant';

const UserLoans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);  // Assuming userId is stored or fetched from localStorage or context

  useEffect(() => {
    // Fetch user ID (replace with your actual method to get user data)
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      setUserId(currentUser.userId);  // Set userId for the current logged-in user
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUserLoans();
    }
  }, [userId]);

  // Fetch the loan applications of the user
  const fetchUserLoans = async () => {
    setLoading(true);
    try {
      const response = await axios.get(AppRoutes.userLoans, { params: { userId } });
      setLoans(response.data);  // Set the loan applications to state
    } catch (error) {
      console.error('Error fetching user loans:', error);
      notification.error({
        message: 'Error',
        description: 'An error occurred while fetching your loan applications.',
        placement: 'topRight',
      });
    } finally {
      setLoading(false);
    }
  };

  // Define the columns for the Ant Design table
  const columns = [
    {
      title: 'Loan Amount',
      dataIndex: 'loanAmount',
      key: 'loanAmount',
    },
    {
      title: 'Loan Purpose',
      dataIndex: 'loanPurpose',
      key: 'loanPurpose',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        // You can conditionally render the status here
        return <span>{status}</span>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleViewDetails(record._id)}>
          View Details
        </Button>
      ),
    },
  ];

  // View loan details (redirect or open modal)
  const handleViewDetails = (loanId) => {
    // Implement viewing loan details logic here (e.g., open a modal or redirect to a details page)
    console.log('View details for loan ID:', loanId);
  };

  return (
    <div className="user-loans">
      <h2 className="text-center text-2xl mb-4">Your Loan Applications</h2>
      <Table
        dataSource={loans}
        columns={columns}
        rowKey="_id"
        loading={loading}
        pagination={false}  // You can enable pagination if you have a large number of loans
      />
    </div>
  );
};

export default UserLoans;
