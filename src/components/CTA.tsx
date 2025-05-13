
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-lg shadow-blue-500/5 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-gradient">Expand</span> Your Mind?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Join Curio today and start discovering fascinating content tailored to your curiosity. Your journey of discovery begins now.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 glow bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group">
                <span>Get Started Free</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 h-24 flex items-center justify-center text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <div>
                    <div className="text-blue-400 font-medium text-2xl">10k+</div>
                    <div className="text-blue-200/70 text-sm">Curated Articles</div>
                  </div>
                </div>
                <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-500/30 h-24 flex items-center justify-center text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <div>
                    <div className="text-cyan-400 font-medium text-2xl">200+</div>
                    <div className="text-cyan-200/70 text-sm">Topics Covered</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-indigo-500/20 rounded-lg p-4 border border-indigo-500/30 h-24 flex items-center justify-center text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <div>
                    <div className="text-indigo-400 font-medium text-2xl">5k+</div>
                    <div className="text-indigo-200/70 text-sm">Happy Users</div>
                  </div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30 h-24 flex items-center justify-center text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <div>
                    <div className="text-purple-400 font-medium text-2xl">Daily</div>
                    <div className="text-purple-200/70 text-sm">New Content</div>
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
