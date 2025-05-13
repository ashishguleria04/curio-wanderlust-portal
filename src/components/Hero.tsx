
import { Button } from "./ui/button";
import { ChevronDown, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20 parallax-container">
      {/* Background elements with improved effects */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-cosmic-purple/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-cosmic-accent/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-[15%] left-[25%] w-56 h-56 bg-cosmic-cyan/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="absolute inset-0 bg-cosmic-dark/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
            <span className="text-gradient">Where Curiosity Wanders,</span> <br className="hidden md:block" />Knowledge Follows
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Curio connects you with the unexpected — from strange science to obscure history, 
            one spark at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 glow bg-gradient-to-r from-cosmic-purple to-cosmic-accent border-0 hover:from-cosmic-accent hover:to-cosmic-purple transition-all duration-300 animate-scale-in group">
              <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Ignite My Curiosity
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-gray-600 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 animate-scale-in glass-card"
              style={{ animationDelay: "0.2s" }}>
              Take Me Somewhere New
            </Button>
          </div>
          
          {/* Floating cards effect */}
          <div className="mt-24 relative h-24 overflow-visible hidden md:block">
            <div className="absolute left-[10%] top-0 w-40 h-24 glass-card rounded-lg p-4 animate-float shimmer" style={{ animationDelay: "0.7s" }}>
              <div className="text-sm text-cosmic-highlight font-semibold">Did you know?</div>
              <div className="text-xs opacity-80 mt-1">Octopuses have three hearts</div>
            </div>
            <div className="absolute left-[40%] top-8 w-44 h-24 glass-card rounded-lg p-4 animate-float shimmer" style={{ animationDelay: "1.5s" }}>
              <div className="text-sm text-cosmic-accent font-semibold">History Nugget</div>
              <div className="text-xs opacity-80 mt-1">Ancient Romans used urine as mouthwash</div>
            </div>
            <div className="absolute right-[15%] top-[-8px] w-40 h-24 glass-card rounded-lg p-4 animate-float shimmer" style={{ animationDelay: "0.2s" }}>
              <div className="text-sm text-blue-400 font-semibold">Space Fact</div>
              <div className="text-xs opacity-80 mt-1">A day on Venus is longer than a year</div>
            </div>
          </div>
        </div>

        <a 
          href="#features" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
          style={{ animation: "bounce 2s infinite" }}
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
