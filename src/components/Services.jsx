import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './services.css'; // Import custom CSS for styling

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 relative overflow-hidden   bg-gradient-to-r from-custom-start to-custom-end">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Services</h2>
        <Slider {...settings} className="services-slider">
          <div className="service-item">
            <div className=" bg-stone-50 p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg- white hover:shadow-xl">
              <h3 className=" text-2xl font-semibold mb-4 text-blue-700">Service 1</h3>
              <p className="  text-lg   text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="service-item">
            <div className=" bg-stone-50 p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg- white hover:shadow-xl">
              <h3 className=" text-blue-700 text-2xl font-semibold mb-4  ">Service 2</h3>
              <p className=" text-lg  text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="service-item">
            <div className=" bg-stone-50 p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg- white hover:shadow-xl">
              <h3 className=" text-2xl font-semibold mb-4  text-blue-700">Service 3</h3>
              <p className=" text-lg  text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
