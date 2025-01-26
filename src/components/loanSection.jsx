import React, { useState } from 'react';
import { Card, Modal, Select, Input, Button, Form, Table } from 'antd';
import { useNavigate } from 'react-router';

const { Option } = Select;

const LoanSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [calculatedLoan, setCalculatedLoan] = useState(null);
  const [loanDetails, setLoanDetails] = useState({
    purpose: '',
    downPayment: 0,
    loanTime: 0,
    installmentAmount: 0,
  });
  const navigate = useNavigate();

  const loanCategories = [
    { category: 'Personal Loan', subcategories: ['Medical Emergency', 'Education', 'Wedding'] },
    { category: 'Home Loan', subcategories: ['Renovation', 'Purchase', 'Construction'] },
    { category: 'Car Loan', subcategories: ['New Car', 'Used Car'] },
  ];

  const handleOpenModal = (category) => {
    setSelectedCategory(category);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setInitialDeposit(0);
    setLoanPeriod(0);
    setCalculatedLoan(null);
  };

  const handleFirstModalSubmit = (values) => {
    // Check if the user is in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      // User is found, proceed to the second modal
      setIsModalVisible(false);
      setIsSecondModalVisible(true);
    } else {
      // User is not found, redirect to the login page
      navigate("/login");
    }
  };

  const handleSecondModalSubmit = () => {
    // Process the loan application details (loanDetails)
    alert('Loan Application Submitted!');
    setIsSecondModalVisible(false);
  };

  const handleCalculate = () => {
    if (selectedSubcategory && initialDeposit > 0 && loanPeriod > 0) {
      const principal = parseFloat(initialDeposit);
      const rate = 5; // Fixed interest rate for simplicity
      const n = parseFloat(loanPeriod);
      const interest = (principal * rate * n) / 100;
      const totalAmount = principal + interest;

      setCalculatedLoan({ principal, interest, totalAmount });
    } else {
      alert('Please fill all the fields with valid values.');
    }
  };

  const columns = [
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Amount ($)', dataIndex: 'amount', key: 'amount' },
  ];

  const loanData = calculatedLoan
    ? [
        { key: '1', description: 'Principal Amount', amount: calculatedLoan.principal.toFixed(2) },
        { key: '2', description: 'Interest', amount: calculatedLoan.interest.toFixed(2) },
        { key: '3', description: 'Total Amount Payable', amount: calculatedLoan.totalAmount.toFixed(2) },
      ]
    : [];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-4xl font-semibold mb-10">Explore Our Loan Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loanCategories.map((category, index) => (
          <Card
            key={index}
            className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white rounded-3xl p-6 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <h3 className="text-4xl font-semibold-center">{category.category}</h3>
              <p className="text-lg font-medium text-center">
                Find the best loan options and calculate your eligibility effortlessly.
              </p>
              <Button
                className="bg-white text-indigo-600 font-semibold rounded-full p-4 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-800 transform hover:scale-105"
                onClick={() => {
                  setSelectedCategory(category);
                  setIsCalculatorVisible(true);
                }}
              >
                Calcualte loan
              </Button>
              
            </div>
          </Card>
        ))}
      </div>

      {/* Loan Calculator Modal */}
      {isCalculatorVisible && selectedCategory && (
        <Modal
          title={<span className="text-2xl font-semibold text-blue-800">{`${selectedCategory.category} Loan Calculator`}</span>}
          visible={isCalculatorVisible}
          onCancel={() => setIsCalculatorVisible(false)}
          footer={null}
          className="rounded-lg"
        >
          <Form layout="vertical" onFinish={handleCalculate} className="space-y-6">
            <Form.Item label={<span className="text-lg font-medium">Select Subcategory</span>}>
              <Select
                placeholder="Select a subcategory"
                onChange={(value) => setSelectedSubcategory(value)}
                value={selectedSubcategory}
                className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              >
                {selectedCategory.subcategories.map((subcategory) => (
                  <Option key={subcategory} value={subcategory}>
                    {subcategory}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label={<span className="text-lg font-medium">Initial Deposit ($)</span>}>
              <Input
                type="number"
                placeholder="Enter initial deposit"
                onChange={(e) => setInitialDeposit(e.target.value)}
                value={initialDeposit}
                className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </Form.Item>

            <Form.Item label={<span className="text-lg font-medium">Loan Period (years)</span>}>
              <Input
                type="number"
                placeholder="Enter loan period in years"
                onChange={(e) => setLoanPeriod(e.target.value)}
                value={loanPeriod}
                className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" block className="bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
              Calculate Loan
            </Button>
          </Form>

          {calculatedLoan && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-blue-700">Loan Breakdown</h4>
              <Table
                dataSource={loanData}
                columns={columns}
                pagination={false}
                bordered
                className="rounded-lg shadow-sm"
              />
            </div>
          )}
        </Modal>
      )}

      
    </div>
  );
};

export default LoanSection;
