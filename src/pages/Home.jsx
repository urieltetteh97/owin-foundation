import HeroSection from "../components/sections/HeroSection";
import ProgramPillars from "../components/sections/ProgramPillars";
import FeaturedStory from "../components/sections/FeaturedStory";
import ApproachBlock from "../components/sections/ApproachBlock";
import DonateCTA from "../components/sections/DonateCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramPillars />
      <FeaturedStory />
      <ApproachBlock />
      <DonateCTA />
    </>
  );
}
