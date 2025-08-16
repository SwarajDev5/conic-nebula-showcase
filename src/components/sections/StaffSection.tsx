import swarajdevPfp from "@/assets/swarajdev-pfp.png";
import hetgamer528Pfp from "@/assets/hetgamer528-pfp.png";
import minegamingPfp from "@/assets/minegaming-pfp.png";
import aizoPfp from "@/assets/aizo-pfp.png";

const StaffSection = () => {
  const teamMembers = [
    {
      name: "SwarajDev",
      role: "Owner",
      image: swarajdevPfp,
      description: "Visionary leader driving innovation and strategic direction"
    },
    {
      name: "Hetgamer528",
      role: "Developer",
      image: hetgamer528Pfp,
      description: "Full-stack developer crafting robust and scalable solutions"
    },
    {
      name: "Minegaming",
      role: "Cheer Girl",
      image: minegamingPfp,
      description: "Community champion bringing positive energy and motivation"
    },
    {
      name: "Aizo",
      role: "Discord Developer",
      image: aizoPfp,
      description: "Bot developer creating seamless Discord integrations"
    }
  ];

  return (
    <section id="staff" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals behind Conic Developments
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:glow transition-all duration-300 group text-center border border-primary/20"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-accent/50 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                {member.name}
              </h3>
              
              <div className="text-primary font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                {member.role}
              </div>
              
              <p className="text-sm text-foreground/70 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;