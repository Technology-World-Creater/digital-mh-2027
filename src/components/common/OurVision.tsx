import React from "react";

const OurVision = ({
  title,
  desc,
  desc1,
  desc2,
  desc3,
}: {
  title: string;
  desc: string;
  desc1: string;
  desc2: string;
  desc3: string;
}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-4 text-center md:text-left">
          Our Vision-{" "}
          <span className="text-[#03CF65] font-light italic">
            Global {title} System
          </span>
        </h2>
        <p className="text-xl leading-relaxed mb-12 text-[#5C6C68] text-center md:text-left">
          {desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              01
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">{desc1}</p>
          </div>
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              02
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">{desc2}</p>
          </div>
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              03
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">{desc3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
