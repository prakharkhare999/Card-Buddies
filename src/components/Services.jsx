import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  useEffect(() => {
    const bubbleContainer = document.getElementById('bubble-container');
    const numBubbles = 15;

    // Create bubbles
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubbleContainer.appendChild(bubble);
    }

    // Animate bubbles
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
      const size = Math.random() * 100 + 50; // Random size between 50 and 150 pixels
      const position = Math.random() * 100;
      const duration = Math.random() * 10 + 5; // Random animation duration between 5 and 15 seconds
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random HSL color

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${position}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.backgroundColor = color;
    });
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Diagonal split background */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to bottom right, white 50%, purple 50%)' }}></div>
        
        {/* Background animation - Purple bubbles */}
        <div id="bubble-container">
          {[...Array(15)].map((_, index) => (
            <div
              key={index}
              className="absolute bubble"
              style={{
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="bg-purple-700 p-6 rounded-lg shadow-lg text-center border border-transparent transition duration-300 hover:border-white">
            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="bg-purple-700 p-6 rounded-lg shadow-lg text-center border border-transparent transition duration-300 hover:border-white">
            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="bg-purple-700 p-6 rounded-lg shadow-lg text-center border border-transparent transition duration-300 hover:border-white">
            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
