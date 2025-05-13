import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-glow-blue opacity-30 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glow-purple opacity-30 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight">
                How <span className="text-gradient">Curio</span> Works
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Curio combines advanced algorithms with human curation to deliver the most 
                engaging and thought-provoking content, tailored to your unique interests.
              </p>
              
              <div className="space-y-6">
                {[
                  "Sign up in seconds and set your initial interest areas.",
                  "Receive daily curated discoveries based on your preferences.",
                  "Explore connections between topics you never knew existed.",
                  "Save favorites and build your personal knowledge library."
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-cosmic-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Section */}
            <div className="relative animate-fade-in">
              <div className="relative z-10 rounded-xl overflow-hidden glass-card shadow-2xl">
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

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-cosmic-accent/20 p-4 border border-cosmic-accent/30 h-24 flex items-center justify-center transform transition-transform hover:scale-105">
                        <div className="text-center">
                          <div className="text-cosmic-accent font-semibold">Science</div>
                          <div className="text-xs text-cosmic-accent/70">18 articles</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-cosmic-highlight/20 p-4 border border-cosmic-highlight/30 h-24 flex items-center justify-center transform transition-transform hover:scale-105">
                        <div className="text-center">
                          <div className="text-cosmic-highlight font-semibold">History</div>
                          <div className="text-xs text-cosmic-highlight/70">24 articles</div>
                        </div>
                      </div>
                    </div>

                    <div className="h-12 bg-gradient-to-r from-cosmic-purple to-cosmic-accent rounded-lg flex items-center justify-center text-white font-medium hover:scale-105 transition-transform">
                      Explore Now
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cosmic-accent/30 rounded-full filter blur-xl z-0"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-cosmic-purple/30 rounded-full filter blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
