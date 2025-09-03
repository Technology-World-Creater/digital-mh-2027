import React from "react";
import HeroSection from "@/components/common/HeroSection";

const BrainIntelligence = () => {
  const title = "Brain Intelligence";
  const line = "/BLine.png";
  const top = "top-23 w-60 pl-2";
  const bgImage = "/BIbg.jpg";
  const logoImage = "/BI.png";
  const description =
    "Brain Intelligence (BI) is an advanced research and innovation initiative by TWC, designed to explore the frontiers of neuroscience, AI, and brain-inspired computing. BI focuses on creating next-generation brain training systems, cognitive development platforms, and AI models inspired by human intelligence.";

  return (
    <div>
      <HeroSection
        title={title}
        line={line}
        top={top}
        bgImage={bgImage}
        logoImage={logoImage}
        description={description}
      />
    </div>
  );
};

export default BrainIntelligence;
