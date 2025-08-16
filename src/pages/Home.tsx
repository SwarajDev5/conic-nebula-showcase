import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/sections/HeroSection";
import StaffSection from "@/components/sections/StaffSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <main>
        <HeroSection />
        <StaffSection />
      </main>
    </div>
  );
};

export default Home;