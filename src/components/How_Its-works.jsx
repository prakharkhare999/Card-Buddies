import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegHandshake, FaRegCreditCard } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 relative bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className=" text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full  bg-indigo-600 w-32 h-32 flex justify-center items-center shadow-md relative mb-4"
            >
              <FaRegLightbulb className="text-white text-4xl" />
            </motion.div>
            <p className="text-center text-gray-700">Description for Step 1</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full  bg-indigo-600 w-32 h-32 flex justify-center items-center shadow-md relative mb-4"
            >
              <FaRegHandshake className="text-white text-4xl" />
            </motion.div>
            <p className="text-center text-gray-700">Description for Step 2</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full  bg-indigo-600 w-32 h-32 flex justify-center items-center shadow-md relative mb-4"
            >
              <FaRegCreditCard className="text-white text-4xl" />
            </motion.div>
            <p className="text-center text-gray-700">Description for Step 3</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
