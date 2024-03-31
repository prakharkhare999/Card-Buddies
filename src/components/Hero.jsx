import React from 'react';
import './Hero.css'; // Import CSS file for animations
import companyLogo from '../Images/footer.png'; // Import your company logo image

const Hero = () => {
  return (
    <section className="relative bg-purple-700 text-white py-20 overflow-hidden">
      {/* Upper section separator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        {/* Company logo */}
        <img src={companyLogo} alt="Company Logo" className="h-24 mb-4" />

        {/* Company description */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 animate__animated animate__fadeInUp">Welcome to our company</h1>
          <p className="text-lg animate__animated animate__fadeInUp">Discover the best services for credit card holders.</p>
        </div>

        {/* Explore button */}
        <button className="bg-white text-purple-900 px-6 py-3 rounded-lg shadow-md font-semibold uppercase tracking-wide transition duration-300 transform hover:scale-105 hover:bg-purple-600 hover:text-white animate__animated animate__fadeInUp">Explore</button>
      </div>
      
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Moving colorful bubbles animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="absolute bubble"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
