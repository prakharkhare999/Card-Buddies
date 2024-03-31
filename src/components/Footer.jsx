import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-lg hover:text-purple-300 transition duration-300"><FaFacebook /></a>
            <a href="#" className="text-lg hover:text-purple-300 transition duration-300"><FaTwitter /></a>
            <a href="#" className="text-lg hover:text-purple-300 transition duration-300"><FaInstagram /></a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-2">Email: info@mycompany.com</p>
          <p className="text-lg">Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-lg">© 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
