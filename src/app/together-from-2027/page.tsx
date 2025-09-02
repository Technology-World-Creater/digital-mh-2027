import React from "react";

import TogetherHeroSection from "./components/TogetherHeroSection";
import CollaborationSection from "./components/CollaborationSection";
import AdvisoryBoardSection from "./components/AdvisoryBoardSection";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TogetherHeroSection />
      <CollaborationSection />
      <AdvisoryBoardSection />
    </div>
  );
};

export default Page;
