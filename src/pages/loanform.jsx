import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AppRoutes } from '../constant/constant';

const LoanApplicationForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    father: '',
    cnic: '',
    phoneNo: '',
    address: '',
    city: '',
    country: '',
    loanAmount: '',
    loanPurpose: '',
    installmentAmount: '',
    loanTimePeriod: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(AppRoutes.applyLoan, formData);
      setMessage({ type: 'success', text: response.data.message });
      navigate("/")
    } catch (error) {
      setMessage({ type: 'error', text: error.response ? error.response.data.message : 'Something went wrong' });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Loan Application Form</h2>
      {message && (
        <div
          className={`p-3 mb-5 ${message.type === 'success' ? 'bg-green-200' : 'bg-red-200'} text-center`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Father's Name</label>
          <input
            type="text"
            name="father"
            value={formData.father}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">CNIC</label>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Loan Amount</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Loan Purpose</label>
          <input
            type="text"
            name="loanPurpose"
            value={formData.loanPurpose}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Installment Amount</label>
          <input
            type="number"
            name="installmentAmount"
            value={formData.installmentAmount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Loan Time Period (Months)</label>
          <input
            type="number"
            name="loanTimePeriod"
            value={formData.loanTimePeriod}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Apply for Loan
        </button>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
