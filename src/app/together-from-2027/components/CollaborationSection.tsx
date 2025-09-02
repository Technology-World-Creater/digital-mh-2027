import React from "react";
import Image from "next/image";

const CollaborationSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#03CF65] mb-10">
          Towards Collaboration with Viksit Maharashtra 2047
        </h2>
        <p className="text-lg font-semibold text-gray-700 mb-12 max-w-5xl mx-auto">
          Digital Maharashtra 2027 is moving forward to collaborate with the
          Viksit Maharashtra 2047 initiative. Together, we aim to align our
          vision of building a digitally empowered, globally connected, and
          future-ready Maharashtra.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Viksit Maharashtra 2047 Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full md:w-1/3">
            <Image
              src="/MHHD.png" // Placeholder, need to confirm actual image
              alt="Viksit Maharashtra 2047 Logo"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* X Separator */}
          <div className="text-4xl font-bold text-gray-800">X</div>

          {/* Digital Maharashtra 2027 Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full md:w-1/3">
            <Image
              src="/LogoHD.png" // Placeholder, need to confirm actual image
              alt="Digital Maharashtra 2027 Logo"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
