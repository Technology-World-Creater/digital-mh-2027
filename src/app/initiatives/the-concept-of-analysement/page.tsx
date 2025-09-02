import HeroSection from "@/components/common/HeroSection";

const TheConceptOfAnalysementPage = () => {
  return (
    <div>
      <HeroSection
        title="Concept of Analysement"
        line="/ALine.png"
        top="top-23"
        bgImage="/digital.jpg"
        logoImage="/TCA.png"
        description="TAC (Technology Agriculture Creater) is an AgriTech initiative under Technology World Creater (TWC), designed to digitize and modernize the agriculture ecosystem. It integrates technology, AI solutions, digital marketplaces, and financial services to empower farmers, buyers, and agri-businesses."
      />
      <div className="flex items-center justify-center min-h-[300px]">
        <h2 className="text-4xl font-bold text-gray-800">Coming Soon....</h2>
      </div>
    </div>
  );
};

export default TheConceptOfAnalysementPage;
