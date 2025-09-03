import Image from "next/image";
import React from "react";

const TACImpacts = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-4xl font-semibold leading-tight sm:leading-[69.19px] relative">
          <div className="text-[#1E3636]">
            Impact by 2027
            <span className="text-[#03CF65]  ">(Our Measurable Goals)</span>
          </div>
          <Image
            src={"/OurMeasurableGoalsLine.png"}
            width={200}
            height={2}
            alt="OurMeasurableGoalsLine"
            className="absolute right-150 top-11"
          />
        </div>

        <div className="text-[#5C6C68] text-xl sm:text-2xl font-bold leading-relaxed sm:text-left ">
          Driving AgriTech Transformation Across Maharashtra
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 py-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-row text-[#1E3636] text-5xl sm:text-6xl font-medium leading-tight justify-center mx-auto">
              <span>50+</span>
              <span className="text-3xl sm:text-4xl relative top-4 md:top-6 ">
                Lakhs
              </span>
            </div>
            <div className="text-gray-800/70 text-lg sm:text-xl font-medium  text-center md:text-left mt-4">
              Farmers Digitally Connected
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-row text-[#1E3636] text-5xl sm:text-6xl font-medium leading-tight justify-center">
              <span>₹20,000</span>
              <span className="text-3xl sm:text-4xl  relative top-4 md:top-6 ">
                X
              </span>
            </div>
            <div className="text-gray-800/70 text-lg sm:text-xl font-medium mx-auto text-center md:text-left mt-4">
              Agri-Trade Volume
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-row text-[#1E3636] text-5xl sm:text-6xl font-medium leading-tight justify-center mx-auto">
              <span>100</span>
              <span className="text-3xl sm:text-4xl  relative top-4 md:top-6">
                %
              </span>
            </div>
            <div className="text-gray-800/70 text-lg sm:text-xl font-medium text-center md:text-left mt-4">
              Rural Districts Covered
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TACImpacts;
