import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo className="text-white text-2xl font-bold" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Testimonials
          </a>
          <Button className="glow bg-gradient-to-r from-cosmic-purple to-cosmic-accent text-white px-6 py-2 rounded-md shadow-md hover:from-cosmic-accent hover:to-cosmic-purple transition-all">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button
            className="w-full glow bg-gradient-to-r from-cosmic-purple to-cosmic-accent text-white px-6 py-3 rounded-md shadow-md hover:from-cosmic-accent hover:to-cosmic-purple transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
