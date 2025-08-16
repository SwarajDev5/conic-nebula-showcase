import React from "react";
import { Mail, MessageCircle, Github, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";

const Contact: React.FC = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "swarajthedev@gmail.com",
      href: "mailto:swarajthedev@gmail.com",
      icon: Mail,
    },
    {
      name: "Discord",
      value: "Join our Discord server",
      href: "https://dsc.gg/conic",
      icon: MessageCircle,
    },
    {
      name: "GitHub",
      value: "SwarajDev5",
      href: "https://github.com/SwarajDev5",
      icon: Github,
    },
    {
      name: "Modrinth",
      value: "Conic Organization",
      href: "https://modrinth.com/organization/conic",
      icon: ExternalLink,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text glow-text mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Get in touch for collaborations or support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <method.icon className="h-8 w-8 text-conic-aqua" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {method.name}
                  </h3>
                  <p className="text-white/70">{method.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-effect rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-conic-aqua focus:ring-1 focus:ring-conic-aqua transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-conic-aqua focus:ring-1 focus:ring-conic-aqua transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-conic-aqua focus:ring-1 focus:ring-conic-aqua transition-colors resize-none"
                placeholder="Tell us about your project or how we can help..."
              />
            </div>
            
            <Button variant="glow" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;