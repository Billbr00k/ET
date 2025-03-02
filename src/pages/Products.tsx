
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard";
import ShoppingCart from "../components/ui/ShoppingCart";
import { getProducts, getCategories, getProductsByCategory } from "../data/products";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  
  const categories = getCategories();
  const allProducts = getProducts();
  
  // Filter products by category if needed
  const filteredProducts = activeCategory
    ? getProductsByCategory(activeCategory)
    : allProducts;
    
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price;
    } else if (sortBy === "price-desc") {
      return b.price - a.price;
    }
    return 0; // default sorting
  });
  
  // Update URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    if (activeCategory) {
      params.set("category", activeCategory);
    } else {
      params.delete("category");
    }
    
    const newUrl = 
      `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    
    window.history.replaceState({}, "", newUrl);
  }, [activeCategory, location.search]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Update active category when URL parameter changes
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  return (
    <>
      <Navbar />
      <main className="mt-24 mb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-medium">Our Collection</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Browse our carefully curated selection of modern furniture designed for comfort,
              style, and functionality.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex gap-2 flex-wrap">
              <button 
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? "bg-foreground text-background"
                    : "bg-secondary hover:bg-secondary/70"
                }`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-secondary hover:bg-secondary/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-secondary border border-border rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="text-xl font-medium mb-3">No products found</h3>
              <p className="text-muted-foreground">
                Try changing your filters or check back later for new arrivals.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ShoppingCart />
    </>
  );
};

export default Products;
