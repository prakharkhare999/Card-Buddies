import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 relative"
    >
      {/* Diagonal background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="h-full" style={{ backgroundImage: 'linear-gradient(to bottom right, #4a00e0 50%, #8e2de2 50%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg overflow-hidden p-6 flex flex-col items-center shadow-md"
          >
            <div className="rounded-full bg-purple-500 w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Step 1 Title</h3>
            <p className="text-gray-600">Step 1 Description</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg overflow-hidden p-6 flex flex-col items-center shadow-md"
          >
            <div className="rounded-full bg-purple-500 w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Step 2 Title</h3>
            <p className="text-gray-600">Step 2 Description</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg overflow-hidden p-6 flex flex-col items-center shadow-md"
          >
            <div className="rounded-full bg-purple-500 w-16 h-16 flex justify-center items-center mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Step 3 Title</h3>
            <p className="text-gray-600">Step 3 Description</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
