"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TabContentProps {
  title: string;
  description: string;
  points: string[];
  images: { src: string; description: string }[];
}

const TabContent: React.FC<TabContentProps> = ({
  title,
  description,
  points,
  images,
}) => (
  <div className="p-6 bg-[#FEFAF5]">
    <h3 className="text-2xl font-bold text-[#03CF65] mb-4">
      {title.includes(".") ? (
        <>
          <span className="text-black">
            {title.substring(0, title.indexOf("."))}
          </span>
          {title.substring(title.indexOf("."))}
        </>
      ) : (
        title
      )}
    </h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-700 mb-6">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={image.src}
            alt={image.description}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-40 object-cover rounded-lg mb-2"
          />
          <p className="text-sm text-gray-600">{image.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ImpactByTEC: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "1.Global Education Rank Boost",
      content: {
        title:
          "In today's digital era, education must go beyond traditional methods. TEC aims to make Maharashtra a leader in global education by 2027.",
        description: "By adopting TEC systems, Maharashtra will",
        points: [
          "Now in the Global Top 5 Education Systems with advanced learning infrastructure.",
          "Bridge the Digital Divide by ensuring technology-driven classrooms across the state.",
          "Create a Future-Ready Workforce equipped with 21st-century skills.",
          "Promote Global Collaboration through participation from 10 leading nations.",
          "Empower Educators & Students with AI, digital content, and real-time learning tools.",
        ],
        images: [
          {
            src: "/1.1.jpg",
            description: "Build World-Class Digital Infrastructure",
          },
          {
            src: "/1.2.jpg",
            description: "Introduce Global Curriculum Standards",
          },
          {
            src: "/1.3.jpg",
            description: "Empower Teachers with Digital Skills",
          },
        ],
      },
    },
    {
      name: "2.Digital Classrooms for AI",
      content: {
        title:
          "In the 21st century, every child deserves equal access to digital learning. TEC will ensure every classroom in Maharashtra becomes a smart classroom, equipped with AI and digital tools.",
        description: "By implementing this, Maharashtra will:",
        points: [
          "Provide Smart Classroom Kits in all government and aided schools.",
          "Train 10 lakh teachers in AI and digital pedagogy across all districts and regions.",
          "Offer student devices through shared tablets/laptops and e-learning programs.",
          "Develop AI-powered personalized learning platforms for adaptive learning and assessment.",
          "Support Teachers with continuous digital training and e-learning resources.",
        ],
        images: [
          {
            src: "/2.1.jpg",
            description: "Equip Every Classroom with Smart Tech",
          },
          { src: "/2.2.jpg", description: "Guarantee Student Device Access" },
          {
            src: "/2.3.jpg",
            description: "Train Teachers for Digital Transformation",
          },
        ],
      },
    },
    {
      name: "3.Equal Access to Quality Education",
      content: {
        title:
          "Education must be inclusive, bridging the educational divide. TEC will guarantee every learner in Maharashtra receives high-quality, standardized education irrespective of location or background.",
        description: "By implementing this, Maharashtra will:",
        points: [
          "Deliver SCERT-aligned digital curriculum accessible in Marathi and English.",
          "Offer assistive technologies for children with disabilities.",
          "Provide digital literacy programs for parents and communities.",
          "Develop analytics-based progress tracking for schools and parents.",
        ],
        images: [
          {
            src: "/3.1.jpg",
            description: "Personalized Learning for Every Child",
          },
          {
            src: "/3.2.jpg",
            description: "Accessible Content for All Abilities",
          },
          {
            src: "/3.3.jpg",
            description: "Affordable Digital Education Tools",
          },
        ],
      },
    },
    {
      name: "4.Global Collaboration",
      content: {
        title:
          "To thrive in a connected world, students need exposure beyond traditional boundaries. TEC will foster global collaboration and shared learning ecosystems.",
        description: "By implementing this, Maharashtra will:",
        points: [
          "Facilitate student exchange programs with leading international schools.",
          "Promote virtual classrooms and exchange programs with leading educators.",
          "Encourage participation in global online competitions and hackathons.",
          "Support collaborative projects and language learning through digital platforms.",
          "Establish international partnerships for curriculum development and teacher training.",
        ],
        images: [
          { src: "/4.1.jpg", description: "Adopt Global Curriculum Standards" },
          { src: "/4.2.jpg", description: "Enable Virtual Exchange Programs" },
          {
            src: "/4.3.jpg",
            description: "Collaborate with Global Ed-Tech Leaders",
          },
        ],
      },
    },
    {
      name: "5.Future-Ready Workforce",
      content: {
        title:
          "Tomorrow's jobs demand new-age skills. TEC will prepare Maharashtra students to lead in a digital-first economy by 2027.",
        description: "By implementing this, Maharashtra will:",
        points: [
          "Integrate coding, AI, robotics, and data science into the curriculum.",
          "Provide skill training and internships with industry partners.",
          "Establish innovation labs and incubators in schools and colleges.",
          "Promote entrepreneurship and digital literacy among youth.",
          "Develop a talent pipeline for emerging technologies.",
        ],
        images: [
          { src: "/5.1.jpg", description: "Teach AI, Coding & Digital Skills" },
          { src: "/5.2.jpg", description: "Create Innovation & Maker Labs" },
          {
            src: "/5.3.jpg",
            description: "Enable Industry-Ready Certifications",
          },
        ],
      },
    },
  ];

  return (
    <section className="my-12">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Impact by,{" "}
            <span className="text-green-700">
              TEC in Digital Maharashtra 2027
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center md:text-left">
            By 2027, TEC will transform Maharashtra into a global education hub
            through these key impacts:
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 bg-[#EFE9E2]">
        <div className="flex flex-col md:flex-row  max-w-7xl mx-auto">
          {/* Left Sidebar for Tabs */}
          <div className="md:w-1/4 py-6">
            <nav>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`relative block w-full text-left py-3 px-4 rounded-l-lg mb-2 transition-colors duration-200 ${activeTab === index
                    ? "bg-[#FEFAF5] text-gray-700 font-semibold"
                    : "text-gray-700 hover:bg-[#FEFAF5]"
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                  {activeTab === index && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#03CF65]">
                      &rarr;
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="md:w-3/4 ">
            <TabContent {...tabs[activeTab].content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactByTEC;
