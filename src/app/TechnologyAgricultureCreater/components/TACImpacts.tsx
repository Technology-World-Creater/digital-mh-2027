import Image from "next/image";
import React from "react";

const TACImpacts = () => {
  return (
    <>
      {/* <div className=" flex flex-col gap-4 w-full mx-auto">
        <div className="flex flex-row gap-2 text-5xl font-semibold font-['Inter'] leading-[69.19px]">
          <div className="flex text-[#1E3636]"> Impact by 2027 </div>
          <div className="flex text-[#03CF65]">(Our Measurable Goals)</div>
        </div>
        <div className="flex text-[#5C6C68] text-2xl font-bold font-['Inter'] leading-9">
          Driving AgriTech Transformation Across Maharashtra
        </div>
        <div className="flex flex-row justify-center gap-16 py-12 ">
          <div className="flex flex-col ">
            <div className="flex flex-row text-[#1E3636] text-6xl font-medium  leading-[77.85px] justify-center ">
              <div className="flex">50+</div>
              <div className="flex text-[#1E3636] text-4xl font-medium  leading-16 mt-4  ">
                Lakhs
              </div>
            </div>
            <div className="flex text-gray-800/70 text-xl font-medium  ">
              {" "}
              Farmers Digitally Connected
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row text-[#1E3636] text-6xl font-medium  leading-[77.85px] justify-center">
              <div className="flex">₹20,000</div>
              <div className="flex text-[#1E3636] text-4xl font-medium  leading-16 mt-4">
                X
              </div>
            </div>
            <div className="flex text-gray-800/70 text-xl font-medium justify-center ">
              {" "}
              Agri-Trade Volume
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row text-[#1E3636] text-6xl font-medium  leading-[77.85px] justify-center">
              <div className="flex">100</div>
              <div className="flex text-[#1E3636] text-4xl font-medium  leading-16 mt-4">
                %
              </div>
            </div>
            <div className="flex text-gray-800/70 text-xl font-medium justify-center ">
              {" "}
              Rural Districts Covered
            </div>
          </div>
        </div>
      </div> */}
      <span></span>

      <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-0 ">
        
        <div className="flex flex-col sm:flex-row gap-2 text-2xl lg:text-5xl font-semibold font-['Inter'] leading-tight sm:leading-[69.19px] text-center   sm:text-left relative ">
          <div className="text-[#1E3636]">Impact by 2027</div>
          <div className="text-[#03CF65]  ">(Our Measurable Goals)</div>
         <Image
         src={"/OurMeasurableGoalsLine.png"}
         width={200}
         height={2}
         alt="OurMeasurableGoalsLine"
         className="absolute right-[460px] top-14"
         />
        </div>

        
        <div className="text-[#5C6C68] text-xl sm:text-2xl font-bold font-['Inter'] leading-relaxed text-center sm:text-left ">
          Driving AgriTech Transformation Across Maharashtra
        </div>

        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16 py-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row text-[#1E3636] text-5xl sm:text-6xl font-medium leading-tight justify-center mx-auto">
              <span>50+</span>
              <span className="text-3xl sm:text-4xl relative top-4 md:top-6 ">Lakhs</span>
            </div>
            <div className="text-gray-800/70 text-lg sm:text-xl font-medium  text-center md:text-left">
              Farmers Digitally Connected
            </div>
          </div>

          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row text-[#1E3636] text-5xl sm:text-6xl font-medium leading-tight justify-center">
              <span>₹20,000</span>
              <span className="text-3xl sm:text-4xl  relative top-4 md:top-6 ">X</span>
            </div>
            <div className="text-gray-800/70 text-lg sm:text-xl font-medium mx-auto text-center md:text-left">
              Agri-Trade Volume
            </div>
          </div>

          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row text-[#1E3636] text-5xl sm:text-6xl font-medium leading-tight justify-center mx-auto">
              <span>100</span>
              <span className="text-3xl sm:text-4xl  relative top-4 md:top-6">%</span>
            </div>
            <div className="text-gray-800/70 text-lg sm:text-xl font-medium text-center md:text-left">
              Rural Districts Covered
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
};

export default TACImpacts;
