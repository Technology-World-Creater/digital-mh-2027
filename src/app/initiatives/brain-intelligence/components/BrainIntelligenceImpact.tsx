import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const BrainIntelligenceImpact: React.FC = () => {
  return (
    <section className="relative w-full py-16 bg-[#F0F7B5] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-gray-600 mb-2">Contribution & Impact</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Be a part of Mission Digital Maharashtra{" "}
            <span className="text-[#7D8729]">2027</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Turn your ideas into real change with BI&apos;s innovation movement,
            driving Maharashtra towards becoming India&apos;s No.1
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center relative bg-[#D1DF60] rounded-lg px-6 sm:px-8 py-6 gap-4 sm:gap-8 text-center sm:text-left">
            <div className="flex flex-col">
              <p className="text-[#1A2F2F] text-sm sm:text-base font-medium font-['Manrope'] leading-snug">
                Join the movement to transfrom Brain-Tech Sector.
              </p>
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 text-white text-base sm:text-lg lg:text-xl font-medium font-['Inter'] bg-[#03CF65] rounded-lg sm:static sm:ml-auto lg:absolute lg:-right-24 lg:top-1/2 lg:-translate-y-1/2 cursor-pointer">
              <span>Apply Now</span>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/brain2.png"
            alt="Brain Intelligence Impact"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BrainIntelligenceImpact;
