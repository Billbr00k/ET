
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "../../context/CartContext";

interface FeaturedSectionProps {
  title: string;
  products: Product[];
}

const FeaturedSection = ({ title, products }: FeaturedSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
      }
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();
      
      return () => {
        container.removeEventListener("scroll", checkScroll);
      };
    }
  }, [products]);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <div className="my-16 md:my-24 animate-fade-in" style={{ animationDelay: "100ms" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-medium transform transition-all duration-500 hover:translate-x-2">{title}</h2>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className={`p-2 rounded-full border border-border transform transition-all duration-300 ${
                showLeftArrow 
                  ? "text-foreground hover:bg-secondary hover:scale-110" 
                  : "text-muted cursor-not-allowed"
              }`}
              disabled={!showLeftArrow}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-2 rounded-full border border-border transform transition-all duration-300 ${
                showRightArrow 
                  ? "text-foreground hover:bg-secondary hover:scale-110" 
                  : "text-muted cursor-not-allowed"
              }`}
              disabled={!showRightArrow}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x"
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="min-w-[280px] md:min-w-[350px] snap-start"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} featured />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
