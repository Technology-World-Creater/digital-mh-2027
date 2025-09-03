import React from "react";
import Image from "next/image";

const features = [
  {
    title: "BI for Education",
    description:
      "Transform the way students learn with personalized brain-training modules, AI-driven learning paths, and cognitive growth tools. BI empowers schools, universities, and learners to unlock their full potential for a future-ready Maharashtra.",
    image: "/B1.jpg",
  },
  {
    title: "BI for Workforce",
    description:
      "Empowering employees and industries with advanced brain intelligence tools that boost problem-solving, creativity, and decision-making. BI builds a skilled workforce prepared for the challenges of Digital Maharashtra 2027.",
    image: "/B2.jpg",
  },
  {
    title: "BI for Healthcare",
    description:
      "Revolutionizing healthcare with cognitive AI systems for early diagnosis, mental wellness monitoring, and brain-function enhancement. BI ensures healthier communities and supports Digital Maharashtra's vision.",
    image: "/B3.jpg",
  },
  {
    title: "BI for Innovation",
    description:
      "Fueling startups, researchers, and innovators with next-gen brain-tech solutions to create breakthrough ideas. BI strengthens Maharashtra's innovation ecosystem and contributes to building India.",
    image: "/B4.jpg",
  },
];

const BrainIntelligenceFeatures: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto pt-16 overflow-hidden -mt-32">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrainIntelligenceFeatures;
