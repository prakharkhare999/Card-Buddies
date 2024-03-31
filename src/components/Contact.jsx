import React from 'react';

const ContactPage = () => {
  return (
    <div className="  bg-gradient-to-r from-custom-start to-custom-end text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        {/* Contact Form */}
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md py-2 px-4" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md py-2 px-4" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full border-gray-300 rounded-md py-2 px-4"></textarea>
          </div>
          <button type="submit" className="bg-white text-purple-700 py-2 px-4 rounded-md hover:bg-purple-100">Submit</button>
        </form>
        
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><span className="font-semibold">Email:</span> info@example.com</p>
          <p className="mb-2"><span className="font-semibold">Phone:</span> +1234567890</p>
          <p className="mb-2"><span className="font-semibold">Address:</span> 123 Street, City, Country</p>
        </div>
        
        {/* Map */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          {/* Add your map component here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.184206401389!2d-0.12775834873676738!3d51.507350887759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce74eabf37%3A0x5d727fd5b3b13f3a!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1638431657403!5m2!1sen!2suk" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            className="w-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
