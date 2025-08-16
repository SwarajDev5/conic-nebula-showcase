import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import conicLogo from "@/assets/conic-team-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Plugins", path: "/plugins" },
    { name: "Setups", path: "/setups" },
    { name: "Others", path: "/others" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={conicLogo} 
              alt="Conic Team Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold gradient-text">Conic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-300 link-underline ${
                  isActive(item.path) 
                    ? 'gradient-text' 
                    : 'text-foreground hover:gradient-text'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="contact" asChild>
              <Link to="/contact">
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-strong backdrop-blur-xl border-t border-primary/20 md:hidden">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-left transition-all duration-300 p-2 ${
                      isActive(item.path) 
                        ? 'gradient-text' 
                        : 'text-foreground hover:gradient-text'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="contact" asChild className="self-start mt-2">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;