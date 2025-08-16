import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;