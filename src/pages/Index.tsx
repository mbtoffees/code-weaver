import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import HowIWorkSection from "@/components/HowIWorkSection";
import BackgroundSection from "@/components/BackgroundSection";
import ContactFormSection from "@/components/ContactFormSection";
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
        <ContactFormSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
