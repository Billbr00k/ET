
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
                    Friends was founded in 2018 by a group of passionate Ethiopian entrepreneurs - Eyuel, Tibebe, Desse, and George. 
                    United by their love for design and cultural heritage, they embarked on a mission to create furniture that honors 
                    Ethiopian craftsmanship while embracing modern aesthetics.
                  </p>
                  <p>
                    Growing up in Addis Ababa, the founders were surrounded by rich traditions of woodworking and furniture making. 
                    They recognized that these skills were being lost as mass-produced furniture flooded the market. Determined to 
                    preserve these artisanal techniques while creating pieces for contemporary living, they pooled their savings and 
                    opened a small workshop in Addis.
                  </p>
                  <p>
                    What began as a modest workshop with three skilled artisans has blossomed into a thriving design house. 
                    Today, Friends collaborates with over twenty master craftspeople across Ethiopia, creating furniture that 
                    tells the story of Ethiopia's rich cultural heritage while meeting the needs of modern homes around the world.
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=500&auto=format&fit=crop"
                    alt="Eyuel - Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Eyuel Tesfaye</h3>
                <p className="text-sm text-muted-foreground">Co-Founder & Design Director</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop"
                    alt="Tibebe - Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Tibebe Assefa</h3>
                <p className="text-sm text-muted-foreground">Co-Founder & Master Craftsman</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                    alt="Desse - Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Desse Bekele</h3>
                <p className="text-sm text-muted-foreground">Co-Founder & Production Lead</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop"
                    alt="George - Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">George Solomon</h3>
                <p className="text-sm text-muted-foreground">Co-Founder & Business Director</p>
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
