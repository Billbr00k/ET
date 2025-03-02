
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShoppingCart from "../components/ui/ShoppingCart";
import { getProductById, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Minus, Plus, ShoppingCart as CartIcon } from "lucide-react";
import ProductCard from "../components/ui/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(id ? getProductById(id) : undefined);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!product && id) {
      const fetchedProduct = getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        
        // Get related products from the same category
        const categoryProducts = getProductsByCategory(fetchedProduct.category)
          .filter(p => p.id !== id)
          .slice(0, 4);
        setRelatedProducts(categoryProducts);
      } else {
        // Product not found, navigate to products page
        navigate("/products");
      }
    }
  }, [id, product, navigate]);
  
  if (!product) {
    return null; // Loading or will redirect
  }

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <Navbar />
      <main className="mt-24 mb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Back button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-sm font-medium mb-8 hover:text-foreground/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Product images */}
            <div className="space-y-4">
              <div 
                className={`aspect-square rounded-lg overflow-hidden bg-secondary ${
                  !imageLoaded ? "shimmer" : ""
                }`}
              >
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className={`w-full h-full object-cover ${
                    imageLoaded ? "image-fade-in" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                        index === activeImage 
                          ? "border-foreground" 
                          : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display font-medium">{product.name}</h1>
                <p className="text-2xl mt-2">${product.price.toLocaleString()}</p>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="border-t border-b border-border py-4">
                <h3 className="font-medium mb-3">Details</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Dimensions</span>
                    <span>
                      W: {product.dimensions.width}cm × 
                      H: {product.dimensions.height}cm × 
                      D: {product.dimensions.depth}cm
                    </span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Materials</span>
                    <span>{product.materials.join(", ")}</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Availability</span>
                    <span className={product.inStock ? "text-green-600" : "text-red-500"}>
                      {product.inStock ? "In stock" : "Out of stock"}
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Add to cart */}
              <div className="flex items-end gap-4">
                <div className="space-y-2">
                  <span className="text-sm">Quantity</span>
                  <div className="flex items-center border border-border rounded-md">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-2 hover:bg-secondary transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-2 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors"
                  disabled={!product.inStock}
                >
                  <CartIcon className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="text-2xl font-display font-medium mb-8">You may also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ShoppingCart />
    </>
  );
};

export default ProductDetail;
