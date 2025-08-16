import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(219 64% 9% / 0.9), hsl(211 100% 10% / 0.8)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 text-center z-10 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="gradient-text">Conic</span>{" "}
            <span className="gradient-text-secondary">Developments</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Redefining Digital Innovation
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Crafting premium solutions that push the boundaries of technology
            and design. Experience the future of digital innovation.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button variant="hero" asChild className="group">
              <Link to="/plugins">
                Explore Works
                <ChevronDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
    </section>
  );
};

export default HeroSection;