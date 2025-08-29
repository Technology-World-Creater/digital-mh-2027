import React from "react";

const OurVision = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Our Vision-{" "}
          <span className="text-green-500">Global Education System</span>
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          We believe education is the foundation of a digital economy. By
          merging innovation and inclusivity, TEC is redefining learning for the
          next decade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md flex items-start">
            <div className="text-4xl font-bold text-gray-400 mr-4 border-2 border-gray-400 rounded-full w-16 h-16 flex items-center justify-center">
              01
            </div>
            <p className="text-lg">
              To redefine education through technology and innovation.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md flex items-start">
            <div className="text-4xl font-bold text-gray-400 mr-4 border-2 border-gray-400 rounded-full w-16 h-16 flex items-center justify-center">
              02
            </div>
            <p className="text-lg">
              To create a global standard curriculum that bridges the gap
              between traditional education and future skills.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md flex items-start">
            <div className="text-4xl font-bold text-gray-400 mr-4 border-2 border-gray-400 rounded-full w-16 h-16 flex items-center justify-center">
              03
            </div>
            <p className="text-lg">
              To collaborate with 10 countries to develop the world&apos;s most
              advanced education system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
