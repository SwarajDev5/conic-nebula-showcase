import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, Settings, FileText, Shield, LogIn, Gamepad2, Database, Target } from "lucide-react";

const Others = () => {
  const projects = [
    {
      icon: <Settings className="w-8 h-8" />,
      name: "TAB Configurations",
      description: "Custom TAB list configurations with animated headers, footers, and dynamic placeholders for enhanced server presentation.",
      image: "/placeholder.svg"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      name: "Skripts",
      description: "Advanced Skript collections for custom server mechanics, automated systems, and enhanced gameplay features.",
      image: "/placeholder.svg"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "DeluxeMenus GUI Menus",
      description: "Beautiful and functional GUI menu configurations with animations, sounds, and interactive elements.",
      image: "/placeholder.svg"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: "Essentials Configurations",
      description: "Optimized EssentialsX configurations with custom commands, permissions, and enhanced functionality.",
      image: "/placeholder.svg"
    },
    {
      icon: <LogIn className="w-8 h-8" />,
      name: "nLogin Configurations",
      description: "Secure authentication system configurations with custom login mechanics and session management.",
      image: "/placeholder.svg"
    },
    {
      icon: <Target className="w-8 h-8" />,
      name: "StrikePractice Configuration",
      description: "Complete practice server configuration with ladders, queues, tournaments, and ranking systems.",
      image: "/placeholder.svg"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Holograms Configurations",
      description: "Dynamic hologram setups with animations, placeholders, and interactive elements for server enhancement.",
      image: "/placeholder.svg"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "AdvancedBan Configuration",
      description: "Comprehensive ban management system with custom templates, appeals, and moderation tools.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Other Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Additional creations and collaborations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group border border-primary/20"
              >
                <div className="flex flex-col h-full">
                  {/* Project Image Placeholder */}
                  <div className="glass rounded-xl mb-6 h-40 flex items-center justify-center border border-primary/10 group-hover:border-accent/30 transition-colors">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" asChild className="flex-1">
                      <a href="https://dsc.gg/conic" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        See All
                      </a>
                    </Button>
                    <Button variant="default" asChild className="flex-1">
                      <a href="https://dsc.gg/conic" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <div className="glass-strong rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto border-2 border-primary/30 glow-strong">
              <h3 className="text-3xl lg:text-4xl font-bold gradient-text-secondary mb-6">
                Need Custom Configurations?
              </h3>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                We create custom configurations and setups tailored to your specific server needs. 
                Get professional solutions that enhance your server's functionality and player experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <a href="https://dsc.gg/conic" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Join Our Discord
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Others;