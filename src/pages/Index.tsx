
import { useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import FeaturedSection from "../components/ui/FeaturedSection";
import CategoryCard from "../components/ui/CategoryCard";
import { getCategories, getFeaturedProducts, getProductsByCategory } from "../data/products";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShoppingCart from "../components/ui/ShoppingCart";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();
  
  // For demo, we'll use the first product image from each category
  const categoryImages: Record<string, string> = {
    chairs: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1974&auto=format&fit=crop",
    tables: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2073&auto=format&fit=crop",
    sofas: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    storage: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=2148&auto=format&fit=crop",
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        <FeaturedSection title="Featured Collection" products={featuredProducts} />
        
        <section className="my-16 md:my-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8">Shop by Category</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(category => (
                <CategoryCard 
                  key={category}
                  name={category}
                  image={categoryImages[category]}
                  count={getProductsByCategory(category).length}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="my-16 md:my-24 py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium">Designed for Modern Living</h2>
              <p className="mt-6 text-muted-foreground text-lg">
                Each piece in our collection is crafted to bring together form, function, and comfort. 
                We believe beautiful furniture should enhance your life, not complicate it.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <h3 className="font-medium">Premium Materials</h3>
                  <p className="text-sm text-muted-foreground">Ethically sourced and built to last generations.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium">Thoughtful Design</h3>
                  <p className="text-sm text-muted-foreground">Balancing beauty, comfort and practicality.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium">Expert Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground">Created by skilled artisans with decades of experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ShoppingCart />
    </>
  );
};

export default Index;
