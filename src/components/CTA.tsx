
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 shadow-lg shadow-cosmic-accent/10 animate-fade-in relative overflow-hidden">
          {/* Animated background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-purple/30 rounded-full filter blur-[80px] animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cosmic-accent/20 rounded-full filter blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
            <div className="shimmer absolute inset-0"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display leading-tight">
                Ready to <span className="text-gradient">Expand</span> Your Mind?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Join Curio today and start discovering fascinating content tailored to your curiosity. Your journey of discovery begins now.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 glow bg-gradient-to-r from-cosmic-purple to-cosmic-accent border-0 hover:from-cosmic-accent hover:to-cosmic-purple transition-all duration-300 group">
                <Sparkles className="mr-2 h-5 w-5" />
                <span>Surprise Me</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-4 h-24 flex items-center justify-center text-center animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "100ms" }}>
                  <div>
                    <div className="text-cosmic-highlight font-medium text-2xl">10k+</div>
                    <div className="text-cosmic-highlight/70 text-sm">Curated Articles</div>
                  </div>
                </div>
                <div className="glass-card rounded-lg p-4 h-24 flex items-center justify-center text-center animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "300ms" }}>
                  <div>
                    <div className="text-cosmic-cyan font-medium text-2xl">200+</div>
                    <div className="text-cosmic-cyan/70 text-sm">Topics Covered</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-card rounded-lg p-4 h-24 flex items-center justify-center text-center animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "200ms" }}>
                  <div>
                    <div className="text-cosmic-accent font-medium text-2xl">5k+</div>
                    <div className="text-cosmic-accent/70 text-sm">Happy Users</div>
                  </div>
                </div>
                <div className="glass-card rounded-lg p-4 h-24 flex items-center justify-center text-center animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "400ms" }}>
                  <div>
                    <div className="text-blue-400 font-medium text-2xl">Daily</div>
                    <div className="text-blue-400/70 text-sm">New Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
