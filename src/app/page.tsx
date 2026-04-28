import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import StatsRow from "@/src/components/StatsRow";
import Projects from "@/src/components/Projects";
import ExperienceSection from "@/src/components/Experience";
import Education from "@/src/components/Education";
import TechStack from "@/src/components/TechStack";
import Certifications from "@/src/components/Certifications";
import ContactCTA from "@/src/components/ContactCTA";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="z-10 max-w-5xl mx-auto pt-32 px-6 pb-20 relative">
        <Hero />
        <StatsRow />
        <Projects />
        <ExperienceSection />
        <Education />
        <TechStack />
        <Certifications />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}