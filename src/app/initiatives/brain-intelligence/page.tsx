import React from "react";
import HeroSection from "@/components/common/HeroSection";
import TSCContribution from "@/components/common/TSCContribution";
import BrainIntelligenceDetails from "./components/BrainIntelligenceDetails";
import ApplyNow from "@/components/common/ApplyNow";

const BrainIntelligence = () => {
  const sectionsData = [
    {
      imageSrc: "/skill1.png",
      altText: "Brain Training & Cognitive Skills Icon",
      title: "Brain Training & Cognitive Skills",
      description:
        "Developing AI-driven platforms for memory, focus, problem-solving, and creativity enhancement to prepare future-ready minds.",
    },
    {
      imageSrc: "/digital1.png",
      altText: "AI Research & Innovation Icon",
      title: "AI Research & Innovation",
      description:
        "Building next-gen AI models inspired by human intelligence to accelerate healthcare, education, and governance solutions.",
    },
    {
      imageSrc: "/industry.png",
      altText: "Global Collaborations Icon",
      title: "Global Collaborations",
      description:
        "Partnering with universities, tech labs, and research institutes to make Maharashtra a global hub of brain-tech innovation.",
    },
    {
      imageSrc: "/employment.png",
      altText: "Startups & Future Jobs Icon",
      title: "Startups & Future Jobs",
      description:
        "Empowering entrepreneurs and youth by creating BI-powered startups, innovation labs, and job opportunities in emerging fields.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Brain Intelligence"
        line="/BLine.png"
        top="top-23 w-60 pl-2"
        bgImage="/BIbg.jpg"
        logoImage="/BI.png"
        description="Brain Intelligence (BI) is an advanced research and innovation initiative by TWC, designed to explore the frontiers of neuroscience, AI, and brain-inspired computing. BI focuses on creating next-generation brain training systems, cognitive development platforms, and AI models inspired by human intelligence."
      />
      <TSCContribution
        title="BI Contributes to"
        description="Digital Maharashtra 2027 ?"
        line="/BLine.png"
        sections={sectionsData}
        mainImageSrc="/Brain.jpg"
        mainImageAlt="Brain Intelligence Main Image"
        logoImageSrc="/BILogo.png"
        logoImageAlt="Brain Intelligence Logo"
        logoTitle="Empowering Brains, Beyond Limits!"
      />
      <ApplyNow title="Brain" />
      <BrainIntelligenceDetails />
    </>
  );
};

export default BrainIntelligence;
