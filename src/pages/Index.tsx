import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BackgroundSection from "@/components/BackgroundSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <HeroSection />
        <PhilosophySection />
        <CapabilitiesSection />
        <BackgroundSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
