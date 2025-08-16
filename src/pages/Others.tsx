import React from "react";
import { Button } from "../components/ui/button";

const Others: React.FC = () => {
  const projects = [
    {
      name: "TAB Configurations",
      description: "Custom TAB plugin configurations for enhanced server displays",
    },
    {
      name: "Skripts",
      description: "Advanced Skript files for server automation and custom features",
    },
    {
      name: "DeluxeMenus GUI Menus",
      description: "Beautiful and functional GUI menus for player interaction",
    },
    {
      name: "Essentials Configurations",
      description: "Optimized Essentials plugin configurations for server management",
    },
    {
      name: "nLogin Configurations",
      description: "Secure login system configurations for player authentication",
    },
    {
      name: "StrikePractice Configuration",
      description: "Complete StrikePractice plugin setup for PvP servers",
    },
    {
      name: "Holograms Configurations",
      description: "Dynamic hologram displays for server information and aesthetics",
    },
    {
      name: "AdvancedBan Configuration",
      description: "Professional ban management system configuration",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text glow-text mb-6">
            Other Projects
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Additional creations and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-white/70 mb-6 min-h-[4rem]">{project.description}</p>
              
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
                    See All
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
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Others;