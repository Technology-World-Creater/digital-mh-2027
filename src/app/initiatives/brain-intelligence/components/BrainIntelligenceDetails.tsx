import React from "react";
import Image from "next/image";

const BrainIntelligenceDetails: React.FC = () => {
  return (
    <section
      className="w-full py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/Background.png')` }}
    >
      <div className="container mx-auto px-4 mb-20 md:mb-10 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Brain Intelligence Logo Card */}
        <div className="bg-white rounded-lg shadow-lg flex items-center space-x-4">
          <Image
            src={"/BI.png"}
            alt="Technology Service Creater Logo"
            width={520}
            height={50}
          />
        </div>

        {/* Duration Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
          <p className="text-sm text-gray-500 mb-4">Duration</p>
          <hr />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">2025-2027</h3>
          <p className="text-sm text-gray-600">
            (Core Research & Development Cycle)
          </p>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
          <p className="text-sm text-gray-500 mb-4">Location</p>
          <hr />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Maharashtra</h3>
          <p className="text-sm text-gray-600">(Innovation & Knowledge Hubs)</p>
        </div>
      </div>
    </section>
  );
};

export default BrainIntelligenceDetails;
