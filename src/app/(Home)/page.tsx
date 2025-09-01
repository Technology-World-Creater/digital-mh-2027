import HomeHero from "./components/HomeHero";
import HomeMapSection from "./components/HomeMapSection";
import HomeMissionSection from "./components/HomeMissionSection";
import HomeKeyInitiatives from "./components/HomeKeyInitiatives";
import HomeMegaProjects from "./components/HomeMegaProjects";
import HomeGovernmentAndLeadership from "./components/HomeGovernmentAndLeadership";
import HomeOpportunitiesToApply from "./components/HomeOpportunitiesToApply";
import HomePartners from "./components/HomePartners";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeMapSection />
      <HomeMissionSection />
      <HomeKeyInitiatives />
      <HomeMegaProjects />
      <HomeGovernmentAndLeadership />
      <HomeOpportunitiesToApply />
      <HomePartners />
    </main>
  );
}
