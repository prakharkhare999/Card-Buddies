import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../Images/howitwork1.png';
import image2 from '../Images/howitwork2.png';
import image3 from '../Images/howitwork3.png';

const HowItWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 relative bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              src={image1}
              alt="Step 1 Image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg w-full h-full shadow-md relative mb-4"
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              src={image2}
              alt="Step 2 Image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg w-full h-full shadow-md relative mb-4"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              src={image3}
              alt="Step 3 Image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg w-full h-full shadow-md relative mb-4"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
