
import { Lightbulb, BookOpen, FlaskConical, Compass } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="bg-feature-gradient rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That <span className="text-gradient">Spark Wonder</span></h2>
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
          />
          <FeatureCard 
            icon={<BookOpen className="h-6 w-6" />}
            title="Article Explorer"
            description="Dive into a curated collection of fascinating articles from reputable sources."
            delay={200}
          />
          <FeatureCard 
            icon={<FlaskConical className="h-6 w-6" />}
            title="Research Findings"
            description="Access the latest research breakthroughs explained in easy-to-understand language."
            delay={300}
          />
          <FeatureCard 
            icon={<Compass className="h-6 w-6" />}
            title="Curiosity Feed"
            description="A personalized stream of content tailored to your interests and past explorations."
            delay={400}
          />
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Features;
