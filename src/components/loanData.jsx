import React, { useState } from 'react';
import { Card, Collapse, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const loanData = [
  {
    title: 'Wedding Loans',
    subcategories: [
      { name: 'Valima', maxLoan: 'PKR 5 Lakh', loanPeriod: '3 years' },
      { name: 'Furniture', maxLoan: 'PKR 5 Lakh', loanPeriod: '3 years' },
      { name: 'Valima Food', maxLoan: 'PKR 5 Lakh', loanPeriod: '3 years' },
      { name: 'Jahez', maxLoan: 'PKR 5 Lakh', loanPeriod: '3 years' },
    ],
  },
  {
    title: 'Home Construction Loans',
    subcategories: [
      { name: 'Structure', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
      { name: 'Finishing', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
      { name: 'Loan', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
    ],
  },
  {
    title: 'Business Startup Loans',
    subcategories: [
      { name: 'Buy Stall', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
      { name: 'Advance Rent for Shop', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
      { name: 'Shop Assets', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
      { name: 'Shop Machinery', maxLoan: 'PKR 10 Lakh', loanPeriod: '5 years' },
    ],
  },
  {
    title: 'Education Loans',
    subcategories: [
      { name: 'University Fees', maxLoan: 'Based on requirement', loanPeriod: '4 years' },
      { name: 'Child Fees Loan', maxLoan: 'Based on requirement', loanPeriod: '4 years' },
    ],
  },
];

const LoanCards = () => {
  const [activeKey, setActiveKey] = useState([]);

  const handleCardClick = (category) => {
    setActiveKey(activeKey.includes(category.title) ? [] : [category.title]);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
        {loanData.map((category, index) => (
          <div key={index} className="p-2">
            <Card
              hoverable
              title={<span className="text-lg font-semibold text-blue-600">{category.title}</span>}
              extra={<PlusCircleOutlined className="text-green-500 text-xl" />}
              onClick={() => handleCardClick(category)}
              className="cursor-pointer shadow-md rounded-lg transition-transform bg-white p-4"
            >
              <Collapse
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
                accordion
                className="mt-4"
              >
                <Panel header={<span className="font-medium text-lg text-gray-800">About loans</span>} key={category.title}>
                  {category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} className="pl-5 mb-3 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-lg underline pb-2 text-gray-800">
                          <strong>{sub.name}</strong>
                        </p>
                        <p className="text-gray-600 text-base mb-1">
                          <strong>Max Loan:</strong> {sub.maxLoan}
                        </p>
                        <p className="text-gray-600 text-base pb-5">
                          <strong>Loan Period:</strong> {sub.loanPeriod}
                        </p>
                        <hr />
                      </div>
                      <div><Button type="primary" className="pl-5 text-base font-bold">
                        Apply
                      </Button></div>
                    </div>
                  ))}
                </Panel>
              </Collapse>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanCards;
