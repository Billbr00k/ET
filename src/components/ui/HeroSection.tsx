
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
          alt="Modern living room interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/10" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight animate-fade-in">
            Elevate Your Space
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-md animate-fade-in" style={{ animationDelay: "200ms" }}>
            Discover premium furniture that balances elegant design with exceptional craftsmanship.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-foreground text-foreground rounded-md font-medium hover:bg-foreground/5 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
