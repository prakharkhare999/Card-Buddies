import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16"
      style={{
        background: 'linear-gradient(to right top, #333333, #1a1a1a)',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center bg-gray-900 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-lg text-center text-white">Brief description of your mission and goals.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center items-center bg-gray-900 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Why Choose Us</h3>
            <p className="text-lg text-center text-white">Highlight the key benefits and advantages of using your service.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
