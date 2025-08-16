import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Star, Calendar, Users } from "lucide-react";

const Plugins = () => {
  const plugins = [
    {
      name: "ConicCore",
      description: "The essential core plugin that powers advanced server functionality with seamless integration and robust performance optimization.",
      downloads: "50K+",
      followers: "2.1K",
      lastUpdated: "2024-12-15",
      platforms: ["Bukkit", "Paper", "Purpur", "Spigot"],
      url: "https://modrinth.com/plugin/coniccore",
      featured: true
    },
    {
      name: "ConicSpawn",
      description: "Advanced spawn management system with teleportation, protection zones, and customizable spawn points for enhanced server control.",
      downloads: "15K+",
      followers: "800",
      lastUpdated: "2024-11-28",
      platforms: ["Bukkit", "Paper", "Spigot"],
      url: "https://modrinth.com/plugin/conicspawn",
      featured: false
    },
    {
      name: "ConicEmojis",
      description: "Bring your server to life with custom emoji support, animated reactions, and interactive chat enhancements.",
      downloads: "8.5K+",
      followers: "450",
      lastUpdated: "2024-12-01",
      platforms: ["Paper", "Purpur"],
      url: "https://modrinth.com/plugin/conicemojis",
      featured: false
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
              <span className="gradient-text">Our Plugins</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Premium quality plugins for enhanced functionality
            </p>
            <Button variant="outline" asChild>
              <a href="https://modrinth.com/organization/conic" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Modrinth
              </a>
            </Button>
          </div>

          {/* Featured Plugin */}
          {plugins.filter(plugin => plugin.featured).map((plugin, index) => (
            <div key={index} className="max-w-4xl mx-auto mb-16">
              <div className="glass-strong rounded-2xl p-8 lg:p-12 glow-strong border-2 border-primary/30">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <Star className="w-6 h-6 text-accent fill-accent" />
                      <span className="text-sm font-medium text-accent uppercase tracking-wide">
                        Featured Plugin
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold gradient-text-secondary mb-4">
                      {plugin.name}
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      {plugin.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                      {plugin.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button variant="hero" asChild className="group">
                        <a href={plugin.url} target="_blank" rel="noopener noreferrer">
                          <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                          Download {plugin.name}
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={plugin.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-primary/20 text-center">
                      <div className="text-2xl font-bold gradient-text">{plugin.downloads}</div>
                      <div className="text-sm text-muted-foreground">Downloads</div>
                    </div>
                    <div className="glass rounded-xl p-4 border border-primary/20 text-center">
                      <div className="text-2xl font-bold gradient-text">{plugin.followers}</div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Plugins */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plugins.filter(plugin => !plugin.featured).map((plugin, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group border border-primary/20"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold gradient-text mb-4 group-hover:text-accent transition-colors">
                    {plugin.name}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed flex-1">
                    {plugin.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {plugin.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="px-2 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded border border-secondary/30"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {plugin.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {plugin.followers}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(plugin.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <Button variant="default" asChild className="w-full">
                      <a href={plugin.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Plugin
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Plugins;
