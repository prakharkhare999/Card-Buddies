import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'What is your return policy?', answer: 'Our return policy allows for returns up to 30 days after purchase. Please note that items must be unused and in the same condition as received.' },
    { question: 'How can I track my order?', answer: 'Once your order has shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination.' },
    { question: 'What payment methods do you accept?', answer: 'We accept major credit cards, PayPal, and other secure payment methods for online purchases. You can also pay using cash on delivery for certain locations.' }
    // Add more FAQs here
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-8 bg-gradient-to-r from-custom-start to-custom-end" bg-gradient-to-r from-custom-start to-custom-end   >
      <div className="container mx-auto">
        <h2 className="text-white  text-3xl font-semibold mb-4">FAQs</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between w-full px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform ${index === activeIndex ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {index === activeIndex && (
                <div className="py-2 px-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
