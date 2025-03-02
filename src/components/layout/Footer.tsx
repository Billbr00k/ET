
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16 mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">ET Interior and Furniture</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Ethiopian-inspired modern furniture crafted with exceptional materials and meticulous attention to detail.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>
          
          
          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for new products and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-md bg-white/80 border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} ET Interior and Furnitures. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
