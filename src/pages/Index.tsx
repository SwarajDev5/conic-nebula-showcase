import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/sections/HeroSection";
import PluginsSection from "@/components/sections/PluginsSection";
import SetupsSection from "@/components/sections/SetupsSection";
import OthersSection from "@/components/sections/OthersSection";
import StaffSection from "@/components/sections/StaffSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <PluginsSection />
        <SetupsSection />
        <OthersSection />
        <StaffSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
