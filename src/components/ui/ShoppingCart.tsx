import { useEffect, useRef, useState } from "react";
import { X, Trash, Plus, Minus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";

const ShoppingCart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    totalPrice,
    isCartOpen, 
    setIsCartOpen,
    clearCart
  } = useCart();
  
  const cartRef = useRef<HTMLDivElement>(null);
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  
  // Handle click outside to close cart
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };
    
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, setIsCartOpen]);
  
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);
  
  if (!isCartOpen) return null;
  
  const handleOrder = () => {
    setIsOrderFormVisible(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearCart();
    setIsOrderFormVisible(false);
    setIsSuccessMessageVisible(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
      <div 
        ref={cartRef}
        className={`absolute top-0 right-0 h-full max-w-md w-full bg-background shadow-xl ${
          isCartOpen ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-medium">Shopping Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Cart items */}
        <div className="flex flex-col h-[calc(100%-180px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-10 px-6 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Trash className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground">
                Looks like you haven't added anything to your cart yet.
              </p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="py-4 px-6 divide-y divide-border">
              {cartItems.map((item) => (
                <li key={item.product.id} className="py-4 flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      ${item.product.price.toLocaleString()}
                    </p>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center mt-3">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-md border border-border hover:bg-secondary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-md border border-border hover:bg-secondary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Item subtotal & remove */}
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-medium">
                      Etb{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && !isOrderFormVisible && !isSuccessMessageVisible && (
          <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">Etb{totalPrice.toLocaleString()}</span>
              </div>
              <button 
                onClick={handleOrder}
                className="w-full py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
              >
                Order
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 text-center mt-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

        {/* Order Form */}
        {isOrderFormVisible && (
          <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border p-6">
            <form 
              name="order-form" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="order-form" />
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-3 py-2 border border-border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-3 py-2 border border-border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full px-3 py-2 border border-border rounded-md"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Success Message */}
        {isSuccessMessageVisible && (
          <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border p-6 animate-right">
            <div className="text-center">
              <p className="text-lg font-medium mb-4">Thank you for ordering! Our agents will be with you shortly!</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
