import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                    <Image src='https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png' preview={false} className="w-32 mx-auto md:mx-0" />
                    <p className="mt-4 text-gray-400 text-sm">
                        Saylani Welfare International Trust is committed to serving humanity by providing food, education, healthcare, and employment opportunities.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to={"aboutUs"} className="hover:text-blue-400">About Us</Link></li>
                        <li><Link to={"services"}  className="hover:text-blue-400">Our Services</Link></li>
                        <li><Link to={"https://saylaniwelfare.com/donate"} className="hover:text-blue-400">Donate</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.facebook.com/SaylaniWelfare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/SaylaniWelfare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/SaylaniWelfare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-xl">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/SaylaniWelfare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 text-xl">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Saylani Welfare International Trust. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
