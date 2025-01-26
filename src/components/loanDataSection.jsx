import React, { useState } from 'react';
import { Button, Card, Modal, Input } from 'antd';
import { Image } from 'antd';
import { useHistory } from 'react-router-dom';

const LoanDataSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    fatherName: '',
    cnic: '',
    loanAmount: '',
    purpose: ''
  });
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
  const [loanDetails, setLoanDetails] = useState({
    loanPurpose: '',
    downPayment: '',
    loanTime: '',
    installmentAmount: ''
  });
  
  const history = useHistory();

  const loanData = [
    { id: 1, title: 'Personal Loan', description: 'Get quick access to funds with low interest.', amount: 5000, rate: 5 },
    { id: 2, title: 'Home Loan', description: 'Buy your dream home with affordable rates.', amount: 200000, rate: 3.5 },
    { id: 3, title: 'Car Loan', description: 'Drive your dream car with flexible payment options.', amount: 30000, rate: 4 },
  ];

  const showModal = (loan) => {
    setSelectedLoan(loan);
    setIsModalVisible(true);
  };

  const handleApplyLoan = () => {
    // Check if user data exists in localStorage
    const user = localStorage.getItem('user');
    
    if (user) {
      // User found in localStorage, show second modal for loan details
      setIsModalVisible(false);
      setIsSecondModalVisible(true);
    } else {
      // User not found, redirect to login page
      history.push('/login');
    }
  };

  const handleSecondModalOk = () => {
    // Handle form submission for second modal (loan details)
    console.log('User loan details:', loanDetails);
    setIsSecondModalVisible(false);
    alert('Loan application submitted successfully!');
  };

  const handleSecondModalCancel = () => {
    setIsSecondModalVisible(false);
  };

  const handleFirstModalOk = () => {
    // Save user data from the first modal
    localStorage.setItem('user', JSON.stringify(userData));
    setIsModalVisible(false);
    handleApplyLoan();
  };

  const handleFirstModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="py-24 px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold mb-12">
          Explore Our Loan Plans
        </h2>

        {/* Loan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loanData.map((loan) => (
            <Card
              key={loan.id}
              className="bg-gradient-to-r from-white via-white to-green-100 text-black"
              hoverable
              onClick={() => showModal(loan)}
              cover={<Image preview={false} alt="Loan" height={200} src="https://plus.unsplash.com/premium_photo-1681487850722-f686554f95c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" className="object-cover h-10 w-full rounded-t-xl" />}
            >
              <Card.Meta
                title={<span className="text-2xl font-bold text-gray-800">{loan.title}</span>}
                description={<span className="text-lg text-gray-600">{loan.description}</span>}
              />
              <div className="mt-4 text-lg text-gray-800">
                <p><strong>Amount:</strong> ${loan.amount}</p>
                <p><strong>Interest Rate:</strong> {loan.rate}%</p>
                <Button onClick={() => showModal(loan)} type="primary" block className="mt-4">
                  Apply for Loan
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* First Modal - Apply Loan (Personal details) */}
        <Modal
          title={`Apply for ${selectedLoan?.title}`}
          visible={isModalVisible}
          onOk={handleFirstModalOk}
          onCancel={handleFirstModalCancel}
          footer={[
            <Button key="back" onClick={handleFirstModalCancel} className="bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200">
              Cancel
            </Button>,
            <Button key="apply" type="primary" onClick={handleFirstModalOk} className="rounded-lg transition duration-200">
              Apply Now
            </Button>,
          ]}
          className="rounded-2xl shadow-xl"
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            borderRadius: '20px',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold">Personal Details</h3>
            <Input
              placeholder="Your Name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Father's Name"
              value={userData.fatherName}
              onChange={(e) => setUserData({ ...userData, fatherName: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="CNIC"
              value={userData.cnic}
              onChange={(e) => setUserData({ ...userData, cnic: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Loan Amount"
              value={userData.loanAmount}
              onChange={(e) => setUserData({ ...userData, loanAmount: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Purpose of Loan"
              value={userData.purpose}
              onChange={(e) => setUserData({ ...userData, purpose: e.target.value })}
              className="w-full"
            />
          </div>
        </Modal>

        {/* Second Modal - Loan Details (if user is found in localStorage) */}
        <Modal
          title={`Loan Details for ${selectedLoan?.title}`}
          visible={isSecondModalVisible}
          onOk={handleSecondModalOk}
          onCancel={handleSecondModalCancel}
          footer={[
            <Button key="back" onClick={handleSecondModalCancel} className="bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200">
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleSecondModalOk} className="rounded-lg transition duration-200">
              Submit Application
            </Button>,
          ]}
          className="rounded-2xl shadow-xl"
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            borderRadius: '20px',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold">Loan Application Details</h3>
            <Input
              placeholder="Purpose of Loan"
              value={loanDetails.loanPurpose}
              onChange={(e) => setLoanDetails({ ...loanDetails, loanPurpose: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Down Payment"
              value={loanDetails.downPayment}
              onChange={(e) => setLoanDetails({ ...loanDetails, downPayment: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Loan Time (Years)"
              value={loanDetails.loanTime}
              onChange={(e) => setLoanDetails({ ...loanDetails, loanTime: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Installment Amount"
              value={loanDetails.installmentAmount}
              onChange={(e) => setLoanDetails({ ...loanDetails, installmentAmount: e.target.value })}
              className="w-full"
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default LoanDataSection;
