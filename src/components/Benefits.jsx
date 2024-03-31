import React from 'react';

const SectionComponent = () => {
  return (
    <section className="bg-gradient-to-r from-custom-start to-custom-end py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="rounded-full bg-orange-400 w-20 h-20 flex justify-center items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Element 1</h3>
            <p className="text-lg text-center text-gray-700">Description of Element 1</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="rounded-full bg-orange-400 w-20 h-20 flex justify-center items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Element 2</h3>
            <p className="text-lg text-center text-gray-700">Description of Element 2</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="rounded-full bg-orange-400 w-20 h-20 flex justify-center items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Element 3</h3>
            <p className="text-lg text-center text-gray-700">Description of Element 3</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="rounded-full bg-orange-400 w-20 h-20 flex justify-center items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Element 4</h3>
            <p className="text-lg text-center text-gray-700">Description of Element 4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
