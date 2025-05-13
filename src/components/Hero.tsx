
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[15%] left-[25%] w-56 h-56 bg-cyan-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Feed Your Curiosity</span> One Discovery at a Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Discover the unexpected with Curio, your gateway to fascinating articles,
            research findings, and facts that expand your mind every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 glow bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 animate-scale-in">
              Feed My Curiosity
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-gray-600 hover:bg-gray-800 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.2s" }}>
              Learn More
            </Button>
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
