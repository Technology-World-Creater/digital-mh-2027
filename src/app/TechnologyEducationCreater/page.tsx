import HeroSection from "@/components/common/HeroSection";
import OurVision from "./components/OurVision";

export default function TechnologyServiceCreater() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <HeroSection
        title="Technology Education Creater"
        line={"/heroLine.png"}
        bgImage={"/TECHero.jpg"}
        logoImage={"/TECLogo.png"}
        description="Technology Education Creator (TEC) is an ambitious initiative under Digital Maharashtra 2027 with a mission to transform India's education ecosystem and position it among the world's top 5 by 2027. TEC envisions building a Global Education System by leveraging technology, innovation, and international collaboration."
      />
      <OurVision />
    </div>
  );
}
