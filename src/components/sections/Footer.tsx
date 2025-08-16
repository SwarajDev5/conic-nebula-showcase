import { Link } from "react-router-dom";
import conicLogo from "@/assets/conic-team-logo.png";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Plugins", path: "/plugins" },
    { name: "Setups", path: "/setups" },
    { name: "Others", path: "/others" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="glass-strong border-t border-primary/30 relative">
      {/* Top glow border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <img src={conicLogo} alt="Conic Team" className="h-10 w-10" />
              <span className="text-2xl font-bold gradient-text">
                Conic Team
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Redefining digital innovation through premium plugins, optimized setups, 
              and cutting-edge development solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1 text-center">
            <h4 className="text-lg font-semibold gradient-text mb-6">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:gradient-text transition-all duration-300 link-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <h4 className="text-lg font-semibold gradient-text mb-6">Get in Touch</h4>
            <div className="space-y-3 text-foreground/70">
              <div>swarajthedev@gmail.com</div>
              <div>
                <a 
                  href="https://dsc.gg/conic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-underline hover:text-primary transition-colors duration-300"
                >
                  Discord Community
                </a>
              </div>
              <div>
                <a 
                  href="https://modrinth.com/organization/conic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-underline hover:text-primary transition-colors duration-300"
                >
                  Modrinth Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="text-center text-foreground/60">
            <p>&copy; 2025 Conic Team™ – All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;