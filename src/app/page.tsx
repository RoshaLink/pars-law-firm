import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { InsightsSection } from "@/components/sections/insights-section";
import { PracticeAreasSection } from "@/components/sections/practice-areas-section";
import { CaseResultsSection } from "@/components/sections/case-results-section";
import { TeamSection } from "@/components/sections/team-section";
import { CareersSection } from "@/components/sections/careers-section";
import { CultureVideoSection } from "@/components/sections/culture-video-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InsightsSection />
        <PracticeAreasSection />
        <CaseResultsSection />
        <TeamSection />
        <CareersSection />
        <CultureVideoSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
