import HeroSection from "@/components/common/HeroSection";
import OurVision from "@/components/common/OurVision";
import WhyTecMatters from "./components/WhyTecMatters";
import NationsEducationVision from "./components/NationsEducationVision";
import ImpactByTEC from "./components/ImpactByTEC";

export default function TechnologyServiceCreater() {
  return (
    <>
      <HeroSection
        title="Technology Education Creater"
        line={"/TECLine.png"}
        top={"top-24 h-4"}
        bgImage={"/TECHero.jpg"}
        logoImage={"/TECLogo.png"}
        description="Technology Education Creator (TEC) is an ambitious initiative under Digital Maharashtra 2027 with a mission to transform India's education ecosystem and position it among the world's top 5 by 2027. TEC envisions building a Global Education System by leveraging technology, innovation, and international collaboration."
      />
      <OurVision
        title={"Education"}
        desc={
          "We believe education is the foundation of a digital economy. By merging innovation and inclusivity, TEC is redefining learning for the next decade."
        }
        desc1={"To redefine education through technology and innovation."}
        desc2={
          "To create a global standard curriculum that bridges the gap between traditional education and future skills."
        }
        desc3={
          "To collaborate with 10 countries to develop the worlds most advanced education system."
        }
      />
      <WhyTecMatters />
      <NationsEducationVision />
      <ImpactByTEC />
    </>
  );
}
