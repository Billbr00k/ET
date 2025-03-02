
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-image.png" 
          alt="Ethiopian modern furniture"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/10" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight animate-fade-in">
            <span className="block transition-transform duration-700 hover:translate-x-2">ET Interior and Furniture</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-md animate-fade-in" style={{ animationDelay: "200ms" }}>
            Discover premium furniture that balances Ethiopian cultural heritage with modern design and exceptional craftsmanship.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors transform transition-transform hover:-translate-y-1"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-foreground text-foreground rounded-md font-medium hover:bg-foreground/5 transition-colors transform transition-transform hover:-translate-y-1"
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
