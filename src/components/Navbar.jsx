 // Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Company Name</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-purple-300 transition duration-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-purple-300 transition duration-300">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-purple-300 transition duration-300">Contact</Link></li>
          <li><Link to="/login" className="text-white hover:text-purple-300 transition duration-300">Login</Link></li>
          <li><Link to="/signup" className="text-white hover:text-purple-300 transition duration-300">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
