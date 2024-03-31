import React, { useState } from 'react';
import companyLogo from '../Images/logo.png'; // Import your company logo image
import image1 from '../Images/howitwork1.jpg'; // Import your slider images
import image2 from '../Images/footer.png';
import image3 from '../Images/hills.jpg';

const images = [image1, image2, image3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <section className="relative bg-gradient-to-r from-custom-start to-custom-end text-white py-20 overflow-hidden flex items-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <img src={companyLogo} alt="Company Logo" className="h-48 rounded-md mx-auto mb-4" />
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find Right Cards Here</h1>
          <p className="text-lg">Never miss out on any online offer on any bank cards..</p>
        </div>
        <button className="bg-white  text-black px-6 py-3 rounded-lg shadow-md font-semibold uppercase tracking-wide transition duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-black">Explore</button>
      </div>
      <div className="w-full md:w-1/2 relative px-4"> {/* Added px-4 padding */}
        <img src={images[currentSlide]} alt={`Slider Image ${currentSlide + 1}`} className="w-full h-full object-cover" />
        <button className="bg-blue-700 text-white absolute top-1/2 left-0 transform -translate-y-1/2    px-2 py-2 rounded-full shadow-md font-semibold uppercase tracking-wide transition duration-300 hover:bg-white hover:text-blue-700" onClick={prevSlide}>Previous</button>
        <button className="bg-blue-700 text-white absolute top-1/2 right-0 transform -translate-y-1/2     px-2 py-2 rounded-full shadow-md font-semibold uppercase tracking-wide transition duration-300 hover:bg-white hover:text-blue-700" onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

export default Hero;
