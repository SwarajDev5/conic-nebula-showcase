import FloatingParticles from "@/components/FloatingParticles";
import { Server, Shield, Zap, Globe, Gamepad, Swords, Cloud, Mountain } from "lucide-react";

const Setups = () => {
  const setups = [
    {
      icon: <Swords className="w-8 h-8" />,
      name: "BharatCraft Lifesteal",
      description: "Custom lifesteal server setup with advanced mechanics, custom enchantments, and balanced PvP gameplay systems.",
      status: "Configured",
      category: "Lifesteal"
    },
    {
      icon: <Gamepad className="w-8 h-8" />,
      name: "BharatCraft Practice",
      description: "Professional practice server configuration with multiple arenas, ELO ranking, and tournament systems.",
      status: "Configured",
      category: "Practice"
    },
    {
      icon: <Swords className="w-8 h-8" />,
      name: "Lifesteal.lol's Lifesteal",
      description: "High-performance lifesteal server setup optimized for large player counts with custom plugins.",
      status: "Configured",
      category: "Lifesteal"
    },
    {
      icon: <Gamepad className="w-8 h-8" />,
      name: "BeatMC Practice",
      description: "Active practice server setup with advanced matchmaking and competitive features.",
      status: "Active: play.beatmc.fun",
      category: "Practice",
      active: true
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "VyralNetwork",
      description: "Complete network setup including Velocity, Hub/Lobby, PracticePVP, Lifesteal, Minigames, and Arcade modes.",
      status: "Active: vyralnetwork.fun",
      category: "Network",
      active: true
    },
    {
      icon: <Swords className="w-8 h-8" />,
      name: "Vortex PracticePvP",
      description: "Specialized 1.8.9 practice PvP server with classic combat mechanics and nostalgic gameplay.",
      status: "Configured",
      category: "Practice"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "SwarajDev Private 1.8.9",
      description: "Private 1.8 practice PvP server with custom configurations and enhanced performance optimization.",
      status: "Private",
      category: "Practice"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      name: "Skyforge",
      description: "Super custom textured survival server with unique gameplay mechanics and immersive world generation.",
      status: "Active: skyforge.com",
      category: "Survival",
      active: true
    }
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case "Lifesteal": return "text-destructive";
      case "Practice": return "text-accent";
      case "Network": return "text-primary";
      case "Survival": return "text-secondary";
      default: return "text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Server Setups</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Optimized configurations for peak performance
            </p>
          </div>

          {/* Setups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {setups.map((setup, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-8 hover:glow transition-all duration-300 group border ${
                  setup.active ? 'border-accent/50 glow-neon' : 'border-primary/20'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${getIconColor(setup.category)} group-hover:text-accent transition-colors duration-300 flex-shrink-0`}>
                      {setup.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                          {setup.name}
                        </h3>
                        {setup.active && (
                          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                        )}
                      </div>
                      <div className="mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded border ${
                          setup.active 
                            ? 'bg-accent/20 text-accent border-accent/30' 
                            : 'bg-primary/20 text-primary border-primary/30'
                        }`}>
                          {setup.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed flex-1">
                    {setup.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${
                      setup.active 
                        ? 'bg-accent/20 text-accent border border-accent/30' 
                        : 'bg-muted/20 text-muted-foreground border border-muted/30'
                    }`}>
                      {setup.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
              <h3 className="text-2xl font-bold gradient-text text-center mb-8">
                Configuration Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Total Setups</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text-secondary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Active Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Server Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text-secondary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Setups;