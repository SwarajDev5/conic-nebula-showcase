import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import swarajdevPfp from "../assets/swarajdev-pfp.png";
import hetgamer528Pfp from "../assets/hetgamer528-pfp.png";
import minegamingPfp from "../assets/minegaming-pfp.png";
import aizoPfp from "../assets/aizo-pfp.png";

const Home: React.FC = () => {
  const developers = [
    {
      name: "SwarajDev",
      pronouns: "(He/Him)",
      role: "Owner",
      image: swarajdevPfp,
    },
    {
      name: "Hetgamer528",
      pronouns: "(He/Him)",
      role: "Developer",
      image: hetgamer528Pfp,
    },
    {
      name: "Minegaming",
      pronouns: "(He/Him)",
      role: "Developer",
      image: minegamingPfp,
    },
    {
      name: "Aizo",
      pronouns: "(He/Him)",
      role: "Discord Developer",
      image: aizoPfp,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text glow-text animate-fade-in">
            Conic Developments
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in">
            Redefining Digital Innovation
          </p>
          <Button variant="glow" size="lg" asChild className="animate-fade-in">
            <Link to="/plugins">Explore Works</Link>
          </Button>
        </div>
      </section>

      {/* Meet Our Developers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Meet Our Developers
            </h2>
            <p className="text-lg text-white/70">
              The talented team behind Conic Developments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((developer, index) => (
              <div
                key={developer.name}
                className="glass-effect rounded-xl p-6 text-center hover-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-conic-aqua/30 hover:border-conic-aqua transition-all duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-1">
                  {developer.name} {developer.pronouns}
                </h3>
                <p className="text-conic-aqua font-medium mb-6">
                  {developer.role}
                </p>
                
                <div className="space-y-3">
                  <Button
                    variant="glow"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://dsc.gg/conic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Work
                    </a>
                  </Button>
                  <Button
                    variant="glowOutline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://dsc.gg/conic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hire
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;