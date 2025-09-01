import React from "react";
import Image from "next/image";

const partnersData = [
  {
    category: "Investment Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Incubation & Accelerator Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Ecosystem Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Past Ecosystem Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Government Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Past Media Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Post Regional Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
  {
    category: "Regional Partners",
    logos: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
  },
];

const HomePartners = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {partnersData.map((partnerCategory, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              {partnerCategory.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
              {partnerCategory.logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="p-4 flex items-center justify-center bg-white rounded-lg shadow-md w-32 h-32"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${idx + 1}`}
                    width={100}
                    height={100}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePartners;
