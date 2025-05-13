
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-glow-blue opacity-20 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                How <span className="text-gradient">Curio</span> Works
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Curio combines advanced algorithms with human curation to deliver the most 
                engaging and thought-provoking content, catered to your unique interests.
              </p>
              
              <div className="space-y-4">
                {[
                  "Sign up in seconds and set your initial interest areas",
                  "Receive daily curated discoveries based on your preferences",
                  "Explore connections between topics you never knew existed",
                  "Save favorites and build your personal knowledge library"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 animate-fade-in group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-cosmic-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative z-10 rounded-xl overflow-hidden glass-card shadow-xl">
                <div className="bg-cosmic-gradient p-1">
                  <div className="bg-cosmic-dark rounded-t-lg p-2 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="h-10 bg-slate-700/40 rounded-lg w-3/4 animate-pulse shimmer"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-700/30 rounded w-full shimmer"></div>
                      <div className="h-4 bg-slate-700/30 rounded w-5/6 shimmer"></div>
                      <div className="h-4 bg-slate-700/30 rounded w-4/5 shimmer"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-cosmic-accent/20 p-4 border border-cosmic-accent/30 h-24 flex items-center justify-center transform transition-transform hover:scale-105">
                        <div className="text-center">
                          <div className="text-cosmic-accent font-medium">Science</div>
                          <div className="text-xs text-cosmic-accent/70">18 articles</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-cosmic-highlight/20 p-4 border border-cosmic-highlight/30 h-24 flex items-center justify-center transform transition-transform hover:scale-105">
                        <div className="text-center">
                          <div className="text-cosmic-highlight font-medium">History</div>
                          <div className="text-xs text-cosmic-highlight/70">24 articles</div>
                        </div>
                      </div>
                    </div>

                    <div className="h-12 bg-gradient-to-r from-cosmic-purple to-cosmic-accent rounded-lg flex items-center justify-center text-white font-medium">
                      Explore Now
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cosmic-accent/30 rounded-full filter blur-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cosmic-purple/30 rounded-full filter blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
