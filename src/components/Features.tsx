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
      className="glass-card rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cosmic-accent/20 animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`h-14 w-14 rounded-lg ${accentClass} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white font-display">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight">
            Features That <span className="text-gradient">Inspire Curiosity</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Explore a world of knowledge through thoughtfully designed features that spark wonder and discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Lightbulb className="h-8 w-8" />}
            title="Random Discoveries"
            description="Uncover unexpected topics that broaden your horizons and challenge your thinking."
            delay={100}
            colorAccent="amber"
          />
          <FeatureCard 
            icon={<BookOpen className="h-8 w-8" />}
            title="Article Explorer"
            description="Dive into curated collections of fascinating articles from trusted sources."
            delay={200}
            colorAccent="blue"
          />
          <FeatureCard 
            icon={<FlaskConical className="h-8 w-8" />}
            title="Research Findings"
            description="Access the latest breakthroughs explained in simple, engaging language."
            delay={300}
            colorAccent="purple"
          />
          <FeatureCard 
            icon={<Compass className="h-8 w-8" />}
            title="Curiosity Feed"
            description="Enjoy a personalized stream of content tailored to your interests."
            delay={400}
            colorAccent="cyan"
          />
        </div>
      </div>

      {/* Enhanced background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-glow-purple opacity-40 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-glow-blue opacity-40 rounded-full filter blur-[120px]"></div>
    </section>
  );
};

export default Features;
