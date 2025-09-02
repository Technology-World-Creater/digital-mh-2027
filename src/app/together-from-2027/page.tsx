import React from "react";

import TogetherHeroSection from "./components/TogetherHeroSection";
import CollaborationSection from "./components/CollaborationSection";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TogetherHeroSection />
      <CollaborationSection />
    </div>
  );
};

export default Page;
