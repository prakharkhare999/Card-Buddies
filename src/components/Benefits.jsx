import React from 'react';

const SectionComponent = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          <div className="rounded-full  bg-orange-50 p-6 shadow-lg border border-black">
            <h3 className="text-xl font-semibold mb-4 text-center">Element 1</h3>
            <p className="text-lg text-center">Description of Element 1</p>
          </div>
          <div className="rounded-full  bg-orange-50 p-6 shadow-lg border border-black">
            <h3 className="text-xl font-semibold mb-4 text-center">Element 2</h3>
            <p className="text-lg text-center">Description of Element 2</p>
          </div>
          <div className="rounded-full  bg-orange-50 p-6 shadow-lg border border-black">
            <h3 className="text-xl font-semibold mb-4 text-center">Element 3</h3>
            <p className="text-lg text-center">Description of Element 3</p>
          </div>
          <div className="rounded-full  bg-orange-50 p-6 shadow-lg border border-black">
            <h3 className="text-xl font-semibold mb-4 text-center">Element 4</h3>
            <p className="text-lg text-center">Description of Element 4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
