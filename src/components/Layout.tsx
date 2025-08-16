import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FloatingParticles } from "./FloatingParticles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-conic-dark via-conic-deep to-conic-dark relative overflow-x-hidden">
      <FloatingParticles />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};