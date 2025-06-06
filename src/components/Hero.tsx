import { Button } from "./ui/button";
import { ChevronDown, Rocket, Book, Lightbulb, Brain, Globe, Compass } from "lucide-react";
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
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-32 parallax-container font-sans">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-[15%] left-[25%] w-56 h-56 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-stars-pattern opacity-20"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Book className="absolute text-purple-400 w-12 h-12 top-[10%] left-[20%] opacity-50 animate-float-slow" />
        <Lightbulb className="absolute text-yellow-400 w-14 h-14 top-[15%] right-[25%] opacity-50 animate-float-slow" />
        <Brain className="absolute text-blue-400 w-12 h-12 top-[50%] left-[15%] opacity-50 animate-float-slow" />
        <Rocket className="absolute text-pink-400 w-14 h-14 top-[60%] right-[20%] opacity-50 animate-float-slow" /> 
        <Compass className="absolute text-orange-400 w-12 h-12 top-[70%] right-[10%] opacity-50 animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display leading-tight tracking-tight text-white">
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Where Curiosity Wanders,
            </span>{" "}
            <br className="hidden md:block" />
            Knowledge Follows
          </h1>
          <p className="text-md md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Curio connects you with the unexpected — from strange science to obscure history, one spark at a time.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-6 glow bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 animate-scale-in group shadow-lg"
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Ignite My Curiosity
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 border-gray-600 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 animate-scale-in glass-card shadow-md"
              style={{ animationDelay: "0.2s" }}
            >
              Take Me Somewhere New
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#features"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-80 hover:opacity-100 transition-opacity"
          style={{ animation: "bounce 2s infinite" }}
        >
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
