
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Product, useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-lg bg-white border border-border hover-lift transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg Etb {
        featured ? "aspect-square md:aspect-[3/4]" : "aspect-[3/4]"
      }`}
    >
      {/* Image */}
      <Link to={`/product/Etb {product.id}`} className="block h-full overflow-hidden">
        <div 
          className={`relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 Etb {
            imageLoaded ? "" : "bg-muted shimmer"
          }`}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity Etb {
              imageLoaded ? "opacity-100 image-fade-in" : "opacity-0"
            }`}
          />
        </div>
        
        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="absolute top-0 left-0 right-0 p-4 glass backdrop-blur-md transition-all duration-300 group-hover:backdrop-blur-lg">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-1">Etb {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
