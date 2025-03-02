
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 glass shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-display font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            Elegance
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          
          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-black/5 transition-colors mr-2"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass shadow-md animate-fade-in">
          <nav className="flex flex-col py-4 px-8">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/products">Products</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative py-2 font-medium hover:text-foreground/70 transition-colors ${
        isActive ? "text-foreground" : "text-foreground/60"
      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground after:origin-bottom-right after:scale-x-0 ${
        isActive ? "after:scale-x-100" : ""
      } hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`py-3 px-2 text-lg font-medium border-b border-black/10 ${
        isActive ? "text-foreground" : "text-foreground/60"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
