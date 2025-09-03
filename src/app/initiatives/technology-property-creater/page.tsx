import HeroSection from "@/components/common/HeroSection";
import ApplyNow from "@/components/common/ApplyNow";
import DigitalMaharashtraContribution from "./components/DigitalMaharashtraContribution";
import DigitalTransformation from "@/components/common/DigitalTransformation";

const TechnologyPropertyCreater = () => {
  return (
    <div>
      <HeroSection
        title="Technology Property Creater"
        line="/PLine.png"
        top="top-18 w-[37em]"
        bgImage="/TPCbg.jpg"
        logoImage="/TPC.png"
        description="Technology Property Creater (TPC) is a specialized division under Technology World Creater (TWC) focused on digitally transforming property, real estate, and smart infrastructure ecosystems. Our mission is to integrate technology-driven property solutions, ensuring transparency, efficiency, and accessibility in real estate for citizens, businesses, and government."
      />
      <DigitalMaharashtraContribution />
      <DigitalTransformation
        title="Empowering Smart Property & Infrastructure Across"
        desc="Technology Property Creator (TPC) is driving the future of real estate and infrastructure by integrating advanced technology, sustainability, and smart solutions. By delivering innovative property models, digital construction tools, and sustainable housing initiatives, TPC ensures that Maharashtra becomes a hub for smart cities and future-ready infrastructure by 2027."
        line="/ALine.png"
        img1="/p.1.jpg"
        img1title="Smart Housing & Urban Development"
        img1desc="Building sustainable, tech-enabled housing solutions for urban and rural communities, ensuring affordability and inclusivity."
        img2="/p.2.jpg"
        img2title="Digital Property Management & IoT Integration"
        img2desc="Offering IoT-enabled property monitoring, energy efficiency systems, and smart building automation for residents and businesses."
        img3="/p.3.jpg"
        img3title="Infrastructure Innovation for Cities & Towns"
        img3desc="Designing next-gen infrastructure projects including smart roads, green buildings, and digitally connected public spaces."
        img4="/p.4.jpg"
        img4title="Corporate & Industrial Real Estate Solutions"
        img4desc="Providing tailored infrastructure solutions for corporate parks, MSMEs, and industrial growth hubs powered by technology."
        img5="/p.5.jpg"
        img5title="Investment & Real Estate Startup Support"
        img5desc="Training aspiring entrepreneurs in prop-tech innovations, real estate fintech, and sustainable construction models."
        img6="/collab.png"
        img6title="Collaboration with Other TWC Verticals"
        img6desc="Integrating with TAC for agri-infrastructure, TSC for digital skills, and TEC for education campuses, making property innovation part of the larger TWC ecosystem."
      />
      <ApplyNow title={"Property"} />
    </div>
  );
};

export default TechnologyPropertyCreater;
