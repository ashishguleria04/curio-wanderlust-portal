
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative z-10 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                <div className="bg-feature-gradient p-1">
                  <div className="bg-[#0F172A] rounded-t-lg p-2 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="h-10 bg-slate-700/40 rounded-lg w-3/4 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-700/30 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-slate-700/30 rounded w-5/6 animate-pulse"></div>
                      <div className="h-4 bg-slate-700/30 rounded w-4/5 animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-blue-500/20 p-4 border border-blue-500/30 h-24 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-blue-400 font-medium">Science</div>
                          <div className="text-xs text-blue-300/70">18 articles</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-purple-500/20 p-4 border border-purple-500/30 h-24 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-purple-400 font-medium">History</div>
                          <div className="text-xs text-purple-300/70">24 articles</div>
                        </div>
                      </div>
                    </div>

                    <div className="h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-medium">
                      Explore Now
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full filter blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
