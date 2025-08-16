import React from "react";
import { Button } from "../components/ui/button";

const Setups: React.FC = () => {
  const setups = [
    {
      name: "BharatCraft Lifesteal",
      description: "High-performance lifesteal server configuration with custom features",
      hasViewOnly: false,
    },
    {
      name: "BharatCraft Practice",
      description: "Optimized practice server setup for competitive PvP",
      hasViewOnly: false,
    },
    {
      name: "Lifesteal.lol's Lifesteal",
      description: "Professional lifesteal configuration with advanced mechanics",
      hasViewOnly: false,
    },
    {
      name: "BeatMC Practice",
      description: "Active practice server configuration - play.beatmc.fun",
      hasViewOnly: false,
    },
    {
      name: "VyralNetwork",
      description: "Complete network setup - vyralnetwork.fun (Velocity, Hub/Lobby, PracticePVP, Lifesteal, Minigames, Arcade)",
      hasViewOnly: true,
    },
    {
      name: "Vortex PracticePvP",
      description: "Advanced PracticePvP server configuration with custom arenas",
      hasViewOnly: false,
    },
    {
      name: "SwarajDev Private 1.8.9",
      description: "Private 1.8 PracticePvP server configuration",
      hasViewOnly: true,
    },
    {
      name: "Skyforge",
      description: "Super custom textured survival server - skyforge.com",
      hasViewOnly: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text glow-text mb-6">
            Server Setups
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Optimized configurations for peak performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {setups.map((setup, index) => (
            <div
              key={setup.name}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{setup.name}</h3>
              <p className="text-white/70 mb-6 min-h-[3rem]">{setup.description}</p>
              
              <div className="flex gap-3">
                <Button
                  variant="glow"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href="https://dsc.gg/conic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </Button>
                
                {!setup.hasViewOnly && (
                  <Button
                    variant="glowOutline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href="https://dsc.gg/conic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setups;