import { Code, Palette, Zap, Globe } from "lucide-react";

const OthersSection = () => {
  const projects = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Bespoke software solutions tailored to your specific requirements and business needs.",
      status: "Active"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Systems",
      description: "Comprehensive design frameworks that ensure consistency across all digital touchpoints.",
      status: "In Progress"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Tools",
      description: "Intelligent automation solutions that streamline workflows and boost productivity.",
      status: "Beta"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Platforms",
      description: "Modern web applications built with cutting-edge technologies and best practices.",
      status: "Coming Soon"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-accent bg-accent/20 border-accent/30";
      case "In Progress":
        return "text-primary bg-primary/20 border-primary/30";
      case "Beta":
        return "text-secondary bg-secondary/20 border-secondary/30";
      default:
        return "text-muted-foreground bg-muted/20 border-muted/30";
    }
  };

  return (
    <section id="others" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Other Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Additional creations and collaborations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group border border-primary/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-primary group-hover:text-accent transition-colors duration-300">
                  {project.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-xl p-8 inline-block max-w-2xl">
            <h4 className="text-2xl font-semibold gradient-text mb-4">
              Have a Project in Mind?
            </h4>
            <p className="text-foreground/70 mb-6">
              Let's collaborate and bring your vision to life with innovative solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersSection;