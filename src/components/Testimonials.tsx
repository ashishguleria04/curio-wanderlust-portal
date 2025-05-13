
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Curio has completely changed how I spend my free time. Instead of mindlessly scrolling, I'm learning something new every day.",
    name: "Alex Johnson",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    rating: 5
  },
  {
    quote: "I've discovered so many interesting topics I never would have found on my own. It's like having a personal knowledge curator.",
    name: "Mia Chen",
    role: "PhD Student",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
    rating: 5
  },
  {
    quote: "The research findings feature has been incredibly valuable for staying on top of developments in my field without having to read dense papers.",
    name: "David Williams",
    role: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    rating: 4
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cosmic-accent/20 rounded-full filter blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full filter blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in font-display">
            What Our <span className="text-gradient">Explorers</span> Say
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            Join thousands who've expanded their knowledge horizons with Curio.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-12 animate-fade-in shadow-lg shadow-cosmic-accent/10">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[currentIndex].rating} className="w-5 h-5 text-gray-500" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl italic mb-8 text-gray-100">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-cosmic-accent" 
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full glass-card hover:bg-cosmic-accent/20 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full glass-card hover:bg-cosmic-accent/20 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-6 bg-cosmic-accent" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
