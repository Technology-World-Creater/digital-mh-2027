import React from "react";
import Link from "next/link";

interface SectionProps {
  bgColor: string;
  icon: string;
  preTitle: string;
  title: string;
  description: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
}

const Section: React.FC<SectionProps> = ({
  bgColor,
  icon,
  preTitle,
  title,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-16 py-2 border-[1px] border-purple-200 rounded-full mb-4">
          {preTitle}
        </div>
        <h2 className="text-5xl font-bold text-[#03CF65] mb-4">
          <span className="text-6xl mr-2">{icon}</span>
          {title}
        </h2>
        <p className="text-gray-700 text-lg mb-8">{description}</p>
        <p className="text-gray-600 font-semibold text-base mb-8">
          Powered by Digital MH 2027
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href={button1Link}
            className="bg-[#03CF65] text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-300 flex items-center space-x-2"
          >
            <span>{button1Text}</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link
            href={button2Link}
            className="border border-gray-400 text-gray-700 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300 flex items-center space-x-2"
          >
            <span>{button2Text}</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

const GetInvolvedSections: React.FC = () => {
  return (
    <div>
      <Section
        bgColor="bg-[#FDF5E5]"
        icon="🚀"
        preTitle="Power the Next Big Innovation"
        title="Join as a Startup"
        description="Showcase your solutions, scale faster, and become part of Maharashtra's innovation ecosystem."
        button1Text="Apply as a Startup"
        button1Link="#"
        button2Text="Contact us"
        button2Link="/ContactUs"
      />
      <Section
        bgColor="bg-[#F1EDF3]"
        icon="💰"
        preTitle="Fuel Maharashtra's Startup Growth"
        title="Join as an Investor"
        description="Support high-impact startups, mentor founders, and be part of shaping India's next tech hub."
        button1Text="Connect as Investor"
        button1Link="#"
        button2Text="Contact Us"
        button2Link="/ContactUs"
      />
      <Section
        bgColor="bg-[#FDF5E5]"
        icon="💡"
        preTitle="Learn, Build & Lead the Future"
        title="Join as a Student"
        description="Access training, mentorship, and real-world projects to turn your ideas into impact."
        button1Text="For Students"
        button1Link="#"
        button2Text="Contact Us"
        button2Link="/ContactUs"
      />
      <Section
        bgColor="bg-[#F1EDF3]"
        icon="🤝"
        preTitle="Be the Change You Wish to See"
        title="Volunteer with Us"
        description="Contribute your time and skills to drive social and technological transformation across Maharashtra."
        button1Text="Become a Volunteer"
        button1Link="#"
        button2Text="Contact Us"
        button2Link="/ContactUs"
      />
    </div>
  );
};

export default GetInvolvedSections;
