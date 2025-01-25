import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <section className="signup-section bg-gray-100 py-12 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 lg:w-1/2 w-full h-full">
          {/* Heading */}
          <div className="text-content text-center">
            <h1 className="text-4xl font-bold text-blue-800 leading-tight">
              Create an Account
            </h1>
            <p className="text-gray-600 text-lg mx-auto lg:max-w-xl">
              Join our healthcare system to manage your appointments, access articles, and receive personalized healthcare services.
            </p>
          </div>

          {/* Form Content */}
          <div className="form-content w-full bg-white p-8 rounded-xl shadow-xl flex flex-col gap-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-left text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Father's Name Input */}
              <div className="flex flex-col">
                <label htmlFor="father-name" className="text-left text-gray-700 font-semibold mb-2">
                  Father's Name
                </label>
                <input
                  type="text"
                  id="father-name"
                  name="father-name"
                  required
                  placeholder="Enter your father's name"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Age Input */}
              <div className="flex flex-col">
                <label htmlFor="age" className="text-left text-gray-700 font-semibold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  placeholder="Enter your age"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* DOB Input */}
              <div className="flex flex-col">
                <label htmlFor="dob" className="text-left text-gray-700 font-semibold mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address Input */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="address" className="text-left text-gray-700 font-semibold mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  placeholder="Enter your address"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                ></textarea>
              </div>

              {/* Password Input */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-left text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Create a password"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Confirm Password Input */}
              <div className="flex flex-col">
                <label htmlFor="confirm-password" className="text-left text-gray-700 font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  required
                  placeholder="Confirm your password"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6 md:col-span-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl w-full md:w-auto"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Additional Links */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link to="/Login" className="text-blue-600 hover:text-blue-700">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
