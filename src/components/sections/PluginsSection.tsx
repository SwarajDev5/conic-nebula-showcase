import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Star } from "lucide-react";

const PluginsSection = () => {
  return (
    <section id="plugins" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Plugins</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Premium quality plugins for enhanced functionality
          </p>
        </div>

        {/* Featured Plugin - ConicCore */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 glow-strong border-2 border-primary/30">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wide">
                    Most Downloaded
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold gradient-text-secondary mb-4">
                  ConicCore
                </h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The essential core plugin that powers advanced server functionality 
                  with seamless integration and robust performance optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    variant="hero" 
                    asChild
                    className="group"
                  >
                    <a 
                      href="https://modrinth.com/plugin/coniccore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Download ConicCore
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://modrinth.com/plugin/coniccore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
              <div className="glass rounded-xl p-6 border border-primary/20">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold gradient-text">50K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Plugins Link */}
        <div className="text-center">
          <div className="glass rounded-xl p-8 inline-block">
            <h4 className="text-2xl font-semibold gradient-text mb-4">
              Explore All Our Plugins
            </h4>
            <p className="text-foreground/70 mb-6 max-w-md">
              Discover our complete collection of innovative plugins and tools
            </p>
            <Button variant="default" asChild>
              <a 
                href="https://modrinth.com/organization/conic" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Modrinth
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginsSection;