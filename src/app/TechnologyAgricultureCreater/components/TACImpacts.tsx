import React from "react";

const TACImpacts = () => {
  return (
    <>
      <div className=" flex flex-col gap-4 w-full">
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
      </div>
    </>
  );
};

export default TACImpacts;
