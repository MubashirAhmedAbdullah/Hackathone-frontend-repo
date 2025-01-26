import { Button, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken') || Cookies.get('authToken');
    setIsAuthenticated(!!token); // If token exists, user is authenticated
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Remove authentication tokens and user info
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    Cookies.remove('authToken');

    // Update authentication status
    setIsAuthenticated(false);

    // Redirect to login page
    navigate('/');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Image
            src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
            width={200}
            preview={false}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-semibold text-lg text-gray-600">
            Home
          </Link>
          <Link to="/userloans" className="font-semibold text-lg text-gray-600">
            Loan
          </Link>
          {isAuthenticated ? (
            <Button
              size="large"
              style={{
                border: 'none',
                background: '#FF4D4F',
                fontWeight: 'bold',
                color: '#fff',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login" className="font-semibold text-lg text-gray-600">
              <Button
                size="large"
                style={{
                  border: 'none',
                  background: '#77B254',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center py-2">
          <Link to="/" className="text-white py-2 hover:text-gray-200">
            Home
          </Link>
          <Link to="/userloans" className="text-white py-2 hover:text-gray-200">
            Loan
          </Link>
          {isAuthenticated ? (
            <Button
              size="large"
              style={{
                border: 'none',
                background: '#FF4D4F',
                fontWeight: 'bold',
                color: '#fff',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login" className="text-white py-2 hover:text-gray-200">
              <Button
                size="large"
                style={{
                  border: 'none',
                  background: '#77B254',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
