import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend API
    console.log('Form submitted with data:', formData);
  };

  return (
    <motion.div className="signup-container min-h-screen flex justify-center items-center relative overflow-hidden"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="absolute top-0 left-0">
        <motion.div className="bubble bg-blue-500 w-20 h-20 rounded-full p-2" animate={{ y: [-20, 20, -20], transition: { repeat: Infinity, duration: 2 } }}></motion.div>
      </motion.div>
      <motion.div className="absolute top-0 right-0">
        <motion.div className="bubble bg-green-500 w-20 h-20 rounded-full p-2" animate={{ y: [-20, 20, -20], transition: { repeat: Infinity, duration: 2 } }}></motion.div>
      </motion.div>
      <div className="signup-content w-full max-w-md p-8 bg-opacity-80   bg-gradient-to-r from-custom-start to-custom-end rounded-lg shadow-lg relative z-10">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
        </form>
        <p className="text-center mt-4">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-600">Log in here</a></p>
      </div>
      <motion.div className="absolute bottom-0 left-0">
        <motion.div className="bubble bg-red-500 w-20 h-20 rounded-full p-2" animate={{ y: [20, -20, 20], transition: { repeat: Infinity, duration: 2 } }}></motion.div>
      </motion.div>
      <motion.div className="absolute bottom-0 right-0">
        <motion.div className="bubble bg-yellow-500 w-20 h-20 rounded-full p-2" animate={{ y: [20, -20, 20], transition: { repeat: Infinity, duration: 2 } }}></motion.div>
      </motion.div>
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div className="bubble bg-pink-500 w-24 h-24 rounded-full p-2" animate={{ x: [-20, 20, -20], y: [-20, 20, -20], transition: { repeat: Infinity, duration: 3 } }}></motion.div>
      </motion.div>
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div className="bubble bg-purple-500 w-24 h-24 rounded-full p-2" animate={{ x: [20, -20, 20], y: [20, -20, 20], transition: { repeat: Infinity, duration: 3 } }}></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SignUp;
