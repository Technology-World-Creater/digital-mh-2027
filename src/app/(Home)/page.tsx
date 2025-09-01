import HomeHero from "./components/HomeHero";
import HomeMapSection from "./components/HomeMapSection";
import HomeMissionSection from "./components/HomeMissionSection";
import HomeKeyInitiatives from "./components/HomeKeyInitiatives";
import HomeMegaProjects from "./components/HomeMegaProjects";
import HomeGovernmentAndLeadership from "./components/HomeGovernmentAndLeadership";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeMapSection />
      <HomeMissionSection />
      <HomeKeyInitiatives />
      <HomeMegaProjects />
      <HomeGovernmentAndLeadership />
    </main>
  );
}
