import React from 'react';
import { Image } from 'antd';

const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t-2 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center">

        {/* Logo Section */}
        <div className="mb-8 lg:mb-0">
          <Image
            src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
            alt="System Logo"
            preview={false}
            width={400}
            height="auto"
          />
        </div>

        {/* Links Section */}
        <div className="mb-8 lg:mb-0 space-y-4 lg:flex lg:space-x-12 lg:space-y-0">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Organization Details Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold">Organization Info</h3>
          <p className="text-sm mt-2">Saylani Welfare International Trust</p>
          <p className="text-sm">1234 Finance Street, City, Country</p>
          <p className="text-sm">Contact: (123) 456-7890</p>
          <p className="text-sm">Email: info@finance.org</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm mt-8">
        <p>© 2025 Saylani Welfare International Trust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
