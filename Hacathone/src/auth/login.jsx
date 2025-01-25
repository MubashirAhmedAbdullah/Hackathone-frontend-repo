import React from 'react';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-section bg-gray-100 py-28 px-6 md:px-12 lg:px-24 text-center h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-16">
        <div className="text-content lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold text-blue-800 mb-6 mt-20 leading-tight">
            Login to Your Healthcare Dashboard
          </h1>
          <p className="text-gray-700 text-lg mb-8 mx-auto lg:mx-0 max-w-xl">
            Access your personalized healthcare management system and start booking appointments, reading articles, and managing your healthcare with ease.
          </p>
        </div>

        {/* Form Content */}
        <div className="form-content lg:w-1/2 bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Welcome Back!</h2>
          <form>
            {/* Email Input */}
            <div className="mb-6">
              <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform transition-all duration-300 w-full"
              >
                Login
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
