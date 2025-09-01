import HomeHero from "./components/HomeHero";
import HomeMapSection from "./components/HomeMapSection";
import HomeMissionSection from "./components/HomeMissionSection";
import HomeKeyInitiatives from "./components/HomeKeyInitiatives";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeMapSection />
      <HomeMissionSection />
      <HomeKeyInitiatives />
    </main>
  );
}
