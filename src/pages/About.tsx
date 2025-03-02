
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShoppingCart from "../components/ui/ShoppingCart";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="mt-24 mb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
              alt="Workshop"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight">
                Crafting Modern Elegance
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Our journey to create furniture that embodies both timeless design and contemporary living.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Elegance was founded in 2018 with a simple mission: to create beautiful,
                    functional furniture that enhances modern living spaces.
                  </p>
                  <p>
                    What began as a small workshop with three craftspeople has grown into a
                    team of designers, artisans, and curators dedicated to bringing exceptional
                    furniture into homes around the world.
                  </p>
                  <p>
                    We believe that great design should be accessible, and that furniture can
                    transform not just your space, but your daily experience within it.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop"
                    alt="Furniture workshop"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Craftmanship</h3>
                <p className="text-muted-foreground">
                  We believe in meticulous attention to detail and the value of expert
                  craftsmanship. Every joint, finish, and material is carefully considered
                  and skillfully executed.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-muted-foreground">
                  Our commitment to the environment guides our choices in materials,
                  production methods, and business practices. We design furniture to last
                  generations, not seasons.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  While we respect traditional techniques, we continuously explore new
                  materials, technologies, and forms to create furniture that meets the
                  evolving needs of modern life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Emma Reid</h3>
                <p className="text-sm text-muted-foreground">Founder & Lead Designer</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">Master Craftsman</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Sophia Garcia</h3>
                <p className="text-sm text-muted-foreground">Product Development</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">Experience the Difference</h2>
              <p className="text-muted-foreground mb-8">
                Discover furniture that elevates your space and stands the test of time.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
              >
                View Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ShoppingCart />
    </>
  );
};

export default About;
