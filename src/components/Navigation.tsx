import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import conicLogo from "../assets/conic-team-logo.png";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Plugins", href: "/plugins" },
    { name: "Setups", href: "/setups" },
    { name: "Others", href: "/others" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={conicLogo} alt="Conic Team" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActive(item.href)
                    ? "text-conic-aqua"
                    : "text-white hover:text-conic-aqua"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-conic-aqua after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="glow" size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 glass-effect mt-4 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-conic-aqua bg-white/10"
                    : "text-white hover:text-conic-aqua hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4">
              <Button variant="glow" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};