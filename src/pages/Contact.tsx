import FloatingParticles from "@/components/FloatingParticles";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "swarajthedev@gmail.com",
      link: "mailto:swarajthedev@gmail.com",
      description: "Send us an email for business inquiries"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Discord",
      value: "Join our Discord server",
      link: "https://dsc.gg/conic",
      description: "Chat with our community and team"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "SwarajDev5",
      link: "https://github.com/SwarajDev5",
      description: "Check out our open source projects"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "Modrinth",
      value: "Conic Organization",
      link: "https://modrinth.com/organization/conic",
      description: "Browse our published plugins"
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
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch for collaborations or support
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group border border-primary/20"
              >
                <div className="flex items-start gap-6">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-sm">
                      {contact.description}
                    </p>
                    <Button variant="outline" asChild>
                      <a 
                        href={contact.link} 
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                        {contact.link.startsWith('http') && <ExternalLink className="w-4 h-4 ml-2" />}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Contact;