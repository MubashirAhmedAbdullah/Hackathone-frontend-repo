import React, { useState } from 'react';
import { Typography, Divider, Card, Row, Col, Button, Modal, Input } from 'antd';
import { FaRing, FaHome, FaBriefcase, FaUniversity } from 'react-icons/fa';

const { Title, Paragraph } = Typography;

const Services = () => {
  const [visible, setVisible] = useState(false);
  const [installmentAmount, setInstallmentAmount] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [totalLoanAmount, setTotalLoanAmount] = useState(null);
  const [markupAmount, setMarkupAmount] = useState(null);
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);

  // Loan calculation function (with 2% markup)
  const calculateLoan = () => {
    // Calculate the total loan amount based on installment amount and loan period (in months)
    const totalMonths = loanPeriod * 12; // Calculate total months (loan period in years * 12)
    const totalLoan = installmentAmount * totalMonths; // Total loan amount = Installment Amount * Period in Months
    
    // Add 2% markup
    const markup = totalLoan * 0.02; // 2% markup
    const totalLoanWithMarkup = totalLoan + markup; // Total loan amount after markup

    // Set the values for display
    setTotalLoanAmount(totalLoanWithMarkup);
    setMarkupAmount(markup);
    setMonthlyInstallment(installmentAmount); // Monthly installment is the same as entered amount
  };

  // Show Modal
  const showModal = () => {
    setVisible(true);
  };

  // Hide Modal
  const handleCancel = () => {
    setVisible(false);
    setInstallmentAmount(0);
    setLoanPeriod(0);
    setTotalLoanAmount(null);
    setMarkupAmount(null);
    setMonthlyInstallment(null);
  };

  return (
    <div className="p-16 bg-gray-50 min-h-screen flex flex-col items-center text-center">
      {/* Services Card Container */}
      <div className="max-w-6xl w-full">

        {/* Main Header Title */}
        <Title level={1} className="text-center text-[#0072BB] font-normal mb-12">
          <span className='text-[#0072BB] underline'>Our Services</span>
        </Title>

        {/* Introductory Paragraph */}
        <Paragraph className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
          <span className='text-lg'>Saylani Welfare International Trust provides financial assistance and loans to empower individuals and families. 
          We offer various loan programs to support weddings, home construction, business startups, and education.</span>
        </Paragraph>

        <Divider className="border-blue-500 mb-12" />

        {/* Service Cards Section */}
        <Row gutter={[24, 24]} justify="center">
          {/* Wedding Loans Card */}
          <Col xs={24} sm={12} lg={6}>
            <Card
              title={<span className="text-[#0072BB] font-normal text-xl"><FaRing className="inline mr-2 text-[#0072BB]" /> Wedding Loans</span>}
              bordered={false}
              hoverable
              className="shadow-xl transition-shadow duration-300 ease-in-out h-full"
            >
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li><strong>Valima</strong></li>
                <li><strong>Furniture</strong></li>
                <li><strong>Valima Food</strong></li>
                <li><strong>Jahez</strong></li>
              </ul>
              <Paragraph className="text-gray-700 text-lg mt-4">
                <strong>Maximum Loan:</strong> PKR 5 Lakh | <strong>Loan Period:</strong> 3 Years
              </Paragraph>
              <Button type="primary" className="mt-4" block onClick={showModal}>Calculate Loan</Button>
            </Card>
          </Col>

          {/* Home Construction Loans Card */}
          <Col xs={24} sm={12} lg={6}>
            <Card
              title={<span className="text-[#0072BB] font-normal text-xl"><FaHome className="inline mr-2 text-[#0072BB]" /> Home Construction Loans</span>}
              bordered={false}
              hoverable
              className="shadow-xl transition-shadow duration-300 ease-in-out h-full"
            >
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li><strong>Structure</strong></li>
                <li><strong>Finishing</strong></li>
                <li><strong>Loan</strong></li>
              </ul>
              <Paragraph className="text-gray-700 text-lg mt-13.5">
                <strong>Maximum Loan:</strong> PKR 10 Lakh | <strong>Loan Period:</strong> 5 Years
              </Paragraph>
              <Button type="primary" className="mt-4" block onClick={showModal}>Calculate Loan</Button>
            </Card>
          </Col>

          {/* Business Startup Loans Card */}
          <Col xs={24} sm={12} lg={6}>
            <Card
              title={<span className="text-[#0072BB] font-normal text-xl"><FaBriefcase className="inline mr-2 text-[#0072BB]" /> Business Startup Loans</span>}
              bordered={false}
              hoverable
              className="shadow-xl transition-shadow duration-300 ease-in-out h-full"
            >
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li><strong>Buy Stall</strong></li>
                <li><strong>Advance Rent for Shop</strong></li>
                <li><strong>Shop Assets</strong></li>
                <li><strong>Shop Machinery</strong></li>
              </ul>
              <Paragraph className="text-gray-700 text-lg mt-4">
                <strong>Maximum Loan:</strong> PKR 10 Lakh | <strong>Loan Period:</strong> 5 Years
              </Paragraph>
              <Button type="primary" className="mt-4" block onClick={showModal}>Calculate Loan</Button>
            </Card>
          </Col>

          {/* Education Loans Card */}
          <Col xs={24} sm={12} lg={6}>
            <Card
              title={<span className="text-[#0072BB] font-normal text-xl"><FaUniversity className="inline mr-2 text-[#0072BB]" /> Education Loans</span>}
              bordered={false}
              hoverable
              className="shadow-xl transition-shadow duration-300 ease-in-out h-full"
            >
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li><strong>University Fees</strong></li>
                <li><strong>Child Fees Loan</strong></li>
              </ul>
              <Paragraph className="text-gray-700 text-lg mt-22">
                <strong>Maximum Loan:</strong> Based on Requirement | <strong>Loan Period:</strong> 4 Years
              </Paragraph>
              <Button type="primary" className="mt-4" block onClick={showModal}>Calculate Loan</Button>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Modal for Loan Calculation */}
      <Modal
        title="Calculate Loan Details"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Enter Installment Amount (PKR)"
            value={installmentAmount}
            onChange={(e) => setInstallmentAmount(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Enter Loan Period (in years)"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(Number(e.target.value))}
          />
          <Button
            type="primary"
            block
            onClick={calculateLoan}
          >
            Calculate Loan
          </Button>

          {totalLoanAmount !== null && (
            <div className="mt-6">
              <div><strong>Loan Amount (Before Markup):</strong> PKR {installmentAmount * loanPeriod * 12}</div>
              <div><strong>Markup (2%):</strong> PKR {markupAmount.toLocaleString()}</div>
              <div><strong>Total Loan Amount:</strong> PKR {totalLoanAmount.toLocaleString()}</div>
              <div><strong>Monthly Installment:</strong> PKR {monthlyInstallment}</div>
              <div><strong>Loan Period:</strong> {loanPeriod} Years</div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Services;
