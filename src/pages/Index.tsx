import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import HowIWorkSection from "@/components/HowIWorkSection";
import BackgroundSection from "@/components/BackgroundSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <HeroSection />
        <PhilosophySection />
        <HowIWorkSection />
        <BackgroundSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
