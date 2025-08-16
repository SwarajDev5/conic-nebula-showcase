import { Monitor, Server, Cpu, HardDrive } from "lucide-react";

const SetupsSection = () => {
  const setups = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Server Optimization",
      description: "High-performance server configurations for maximum efficiency and minimal latency.",
      features: ["Performance Tuning", "Security Hardening", "Resource Management"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Development Environment",
      description: "Complete development setups optimized for productivity and modern workflows.",
      features: ["IDE Configuration", "Tool Integration", "Workflow Automation"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Performance Builds",
      description: "Custom system builds designed for high-performance computing and gaming.",
      features: ["Hardware Optimization", "Overclocking", "Thermal Management"]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "Advanced storage configurations for speed, reliability, and data protection.",
      features: ["RAID Configuration", "SSD Optimization", "Backup Systems"]
    }
  ];

  return (
    <section id="setups" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">System Setups</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Optimized configurations for peak performance
          </p>
        </div>

        {/* Setups Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {setups.map((setup, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group border border-primary/20"
            >
              <div className="flex items-start gap-6">
                <div className="text-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
                  {setup.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {setup.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {setup.description}
                  </p>
                  <div className="space-y-2">
                    {setup.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupsSection;