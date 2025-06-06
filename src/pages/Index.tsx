
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DailyCurio from "@/components/DailyCurio";

const Index = () => {
  return (
    <div className="min-h-screen bg-curio-gradient">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DailyCurio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
