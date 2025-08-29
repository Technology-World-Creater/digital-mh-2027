import React from "react";

const OurVision = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-4 text-center md:text-left">
          Our Vision-{" "}
          <span className="text-[#03CF65] font-light italic">
            Global Education System
          </span>
        </h2>
        <p className="text-xl leading-relaxed mb-12 text-[#5C6C68] text-center md:text-left">
          We believe education is the foundation of a digital economy. By
          merging innovation and inclusivity, TEC is redefining learning for the
          next decade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              01
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">
              To redefine education through technology and innovation.
            </p>
          </div>
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              02
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">
              To create a global standard curriculum that bridges the gap
              between traditional education and future skills.
            </p>
          </div>
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              03
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">
              To collaborate with 10 countries to develop the worlds most
              advanced education system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
