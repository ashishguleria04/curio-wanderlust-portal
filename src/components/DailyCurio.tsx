import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Image, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface CurioFactProps {
  text: string;
  category: string;
  imageUrl: string;
}

const curioFacts: CurioFactProps[] = [
  {
    text: "A day on Venus is longer than a year on Venus. Venus rotates so slowly that it takes 243 Earth days to complete one rotation, but only 225 Earth days to orbit the Sun.",
    category: "Astronomy",
    imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    text: "Octopuses have three hearts, nine brains (a central brain and eight mini-brains, one controlling each arm), and blue blood.",
    category: "Marine Biology",
    imageUrl: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1000&auto=format&fit=crop"
  },
  {
    text: "The wood frog can survive being frozen. It stops its heart and breathing completely during winter and thaws back to life in spring.",
    category: "Zoology",
    imageUrl: "https://images.unsplash.com/photo-1551189014-fe587ea12ba9?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    text: "The Library of Babel is a website containing every possible combination of 1,312,000 characters, including every book that has been written and every book that will ever be written.",
    category: "Literature",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop"
  }
];

const DailyCurio = () => {
  const [currentFact, setCurrentFact] = useState<number>(0);
  
  const refreshFact = () => {
    const nextIndex = (currentFact + 1) % curioFacts.length;
    setCurrentFact(nextIndex);
  };
  
  const fact = curioFacts[currentFact];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Daily <span className="text-gradient">Curio</span></h2>
          <p className="text-gray-300 text-lg mb-8">
            Expand your mind with today's fascinating fact
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card overflow-hidden rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image
                  className="absolute top-3 left-3 w-6 h-6 text-white z-20 bg-black/40 p-1 rounded"
                />
                <img
                  src={fact.imageUrl}
                  alt={fact.category}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>

              {/* Content Section */}
              <CardContent className="p-8 flex flex-col justify-between">
                <div>
                  {/* Category */}
                  <div className="flex items-center text-sm text-cosmic-highlight mb-4">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    <span className="font-medium uppercase tracking-wide">{fact.category}</span>
                  </div>

                  {/* Fact Text */}
                  <p className="text-lg leading-relaxed text-gray-100 font-light mb-6">
                    "{fact.text}"
                  </p>
                </div>

                {/* Button */}
                <Button
                  className="w-full bg-cosmic-gradient text-white group hover:bg-cosmic-accent/20 focus:ring-2 focus:ring-cosmic-highlight focus:outline-none transition-all relative rounded-md shadow-md"
                  onClick={refreshFact}
                  aria-label="Show another fact"
                >
                  <RefreshCw
                    className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500"
                  />
                  <span>Show Me Another Fact</span>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow-cyan opacity-30 rounded-full filter blur-[100px] -z-10"></div>
    </section>
  );
};

export default DailyCurio;
