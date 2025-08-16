import React from "react";
import { ExternalLink, Download, Users, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

const Plugins: React.FC = () => {
  const plugins = [
    {
      name: "ConicCore",
      description: "Essential core functionality plugin for enhanced server management",
      downloads: "2.5K",
      followers: "450",
      lastUpdated: "2 days ago",
      platforms: ["Bukkit", "Paper", "Purpur", "Spigot"],
      url: "https://modrinth.com/plugin/coniccore",
      featured: true,
    },
    {
      name: "ConicSpawn",
      description: "Advanced spawn management with teleportation and protection features",
      downloads: "1.8K",
      followers: "320",
      lastUpdated: "1 week ago",
      platforms: ["Bukkit", "Paper", "Spigot"],
      url: "https://modrinth.com/plugin/conicspawn",
      featured: false,
    },
    {
      name: "ConicEmojis",
      description: "Add custom emojis and reactions to enhance player communication",
      downloads: "1.2K",
      followers: "280",
      lastUpdated: "3 days ago",
      platforms: ["Bukkit", "Paper", "Purpur"],
      url: "https://modrinth.com/plugin/conicemojis",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text glow-text mb-6">
            Our Plugins
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Premium quality plugins for enhanced functionality
          </p>
          <Button variant="glow" size="lg" asChild>
            <a
              href="https://modrinth.com/organization/conic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              View on Modrinth
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-8">
          {plugins.map((plugin, index) => (
            <div
              key={plugin.name}
              className={`glass-effect rounded-xl p-8 hover-glow transition-all duration-300 ${
                plugin.featured ? "border-2 border-conic-aqua/50 shadow-glow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plugin.featured && (
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-conic-aqua to-conic-cyan text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Most Downloaded
                  </span>
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{plugin.name}</h3>
                  <p className="text-white/70 mb-4">{plugin.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {plugin.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-conic-deep/50 text-conic-aqua border border-conic-aqua/30 rounded-full text-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-white/60">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      {plugin.downloads} downloads
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {plugin.followers} followers
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Updated {plugin.lastUpdated}
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Button variant="glow" size="lg" asChild>
                    <a
                      href={plugin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      View Plugin
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plugins;