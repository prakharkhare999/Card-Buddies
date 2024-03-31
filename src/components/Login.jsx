import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username and password
    if (!username || !password) {
      setError('Please enter username and password');
    } else {
      // Perform login action here
      console.log('Logging in with username:', username, 'and password:', password);
      // Clear form fields and error message
      setUsername('');
      setPassword('');
      setError('');
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google');
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: "url('  https://imgs.search.brave.com/IAadgUaUV0coT3doeWo8tmVOKE7HcE8ySVmByNE9IyM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTUyNjY1OTE4Nzgt/ZjkzZTMyYmM1OTM3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OFlt/eDFaU1V5TUcxdmRX/NTBZV2x1ZkdWdWZE/QjhmREI4Zkh3dw  ')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md p-6 bg-black rounded-lg shadow-lg"
        style={{ border: '3px solid #E5E7EB', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
      >
        <h2 className="text-2xl text-white font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mb-4"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full  bg-slate-100 border-2  py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:bg-red-600 flex items-center justify-center"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M45.03 23.36c0-1.34-.12-2.64-.35-3.9H24v7.35h12.91a9.36 9.36 0 0 1-4.08 6.14v5.12h6.6c3.87-3.56 6.08-8.8 6.08-14.71z"/>
              <path fill="#FF3D00" d="M24 47c5.53 0 10.38-1.86 14.38-5.05l-6.6-5.12c-1.83 1.23-4.18 1.95-6.78 1.95-5.2 0-9.6-3.13-11.54-7.58H6.92v4.74A23.99 23.99 0 0 0 24 47z"/>
              <path fill="#4CAF50" d="M12.46 28.73A13.8 13.8 0 0 1 12 26c0-1.3.22-2.56.6-3.73V17.54H6.92A23.96 23.96 0 0 0 6 24c0 3.87.92 7.53 2.54 10.73l3.92-3.02z"/>
              <path fill="#1976D2" d="M24 10c2.74 0 5.25.94 7.21 2.49l5.4-5.4C34.33 3.61 29.6 1 24 10zm0 28c-5.52 0-10.34-1.9-14.22-5.08l5.42-4.18c2.1 1.4 4.54 2.22 7.21 2.22 5.2 0 9.6-3.13 11.54-7.58H6.92a23.96 23.96 0 0 0 0 15.16h16.12c-1.28 3.32-4.32 5.42-7.72 5.42z"/>
            </svg>
            Login with Google
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
