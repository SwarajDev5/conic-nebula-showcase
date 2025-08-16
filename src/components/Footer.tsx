import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Plugins", href: "/plugins" },
    { name: "Setups", href: "/setups" },
    { name: "Others", href: "/others" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative z-10 glass-effect border-t border-conic-aqua/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © 2025 Conic Team™ – All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white/70 hover:text-conic-aqua transition-all duration-300 hover:shadow-glow text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};