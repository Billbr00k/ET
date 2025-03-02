
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
  
  // Category images now reference the assets folder
  // Note: These are placeholder paths - the actual images will need to be uploaded by the user
  const categoryImages: Record<string, string> = {
    chairs: "/assets/categories/chairs.jpg",
    tables: "/assets/categories/tables.jpg",
    sofas: "/assets/categories/sofas.jpg",
    bedroom: "/assets/categories/bedroom.jpg",
    storage: "/assets/categories/storage.jpg",
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
        
        <section className="my-16 md:my-24 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 transform transition-all duration-500 hover:translate-x-2">Shop by Category</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={category} className="animate-fade-in" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <CategoryCard 
                    name={category}
                    image={categoryImages[category]}
                    count={getProductsByCategory(category).length}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="my-16 md:my-24 py-24 bg-secondary animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium transform transition-all duration-500 hover:scale-105">Designed for Modern Ethiopian Living</h2>
              <p className="mt-6 text-muted-foreground text-lg">
                Each piece in our collection is crafted to bring together Ethiopian heritage, modern form, function, and comfort. 
                We believe beautiful furniture should enhance your life, not complicate it.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3 transform transition-all duration-500 hover:-translate-y-2">
                  <h3 className="font-medium">Premium Materials</h3>
                  <p className="text-sm text-muted-foreground">Ethically sourced and built to last generations.</p>
                </div>
                <div className="space-y-3 transform transition-all duration-500 hover:-translate-y-2">
                  <h3 className="font-medium">Thoughtful Design</h3>
                  <p className="text-sm text-muted-foreground">Balancing cultural heritage with modern practicality.</p>
                </div>
                <div className="space-y-3 transform transition-all duration-500 hover:-translate-y-2">
                  <h3 className="font-medium">Expert Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground">Created by skilled Ethiopian artisans with decades of experience.</p>
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
