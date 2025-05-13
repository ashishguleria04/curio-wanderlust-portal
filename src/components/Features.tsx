
import { Lightbulb, BookOpen, FlaskConical, Compass } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  colorAccent?: string;
}

const FeatureCard = ({ icon, title, description, delay = 0, colorAccent = "blue" }: FeatureCardProps) => {
  const accentMap = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30 hover:border-blue-400/50",
    purple: "bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30 hover:border-cosmic-accent/50",
    cyan: "bg-cosmic-cyan/20 text-cosmic-cyan border-cosmic-cyan/30 hover:border-cosmic-cyan/50",
    amber: "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:border-amber-400/50"
  };
  
  const accentClass = accentMap[colorAccent as keyof typeof accentMap] || accentMap.blue;

  return (
    <div 
      className="glass-card rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cosmic-accent/10 animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`h-12 w-12 rounded-lg ${accentClass} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white font-display">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Features That <span className="text-gradient">Spark Wonder</span></h2>
          <p className="text-gray-300 text-lg">
            Curio is designed to take you on a journey of discovery through thoughtfully crafted features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Lightbulb className="h-6 w-6" />}
            title="Random Discoveries"
            description="Encounter unexpected topics that broaden your horizons and challenge your thinking."
            delay={100}
            colorAccent="amber"
          />
          <FeatureCard 
            icon={<BookOpen className="h-6 w-6" />}
            title="Article Explorer"
            description="Dive into a curated collection of fascinating articles from reputable sources."
            delay={200}
            colorAccent="blue"
          />
          <FeatureCard 
            icon={<FlaskConical className="h-6 w-6" />}
            title="Research Findings"
            description="Access the latest research breakthroughs explained in easy-to-understand language."
            delay={300}
            colorAccent="purple"
          />
          <FeatureCard 
            icon={<Compass className="h-6 w-6" />}
            title="Curiosity Feed"
            description="A personalized stream of content tailored to your interests and past explorations."
            delay={400}
            colorAccent="cyan"
          />
        </div>
      </div>

      {/* Enhanced background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-glow-purple opacity-30 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-glow-blue opacity-30 rounded-full filter blur-[100px]"></div>
    </section>
  );
};

export default Features;
