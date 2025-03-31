
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PizzaCard from '@/components/PizzaCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePizzas } from '@/hooks/use-pizzas';

const Index: React.FC = () => {
  const { data: allPizzas = [], isLoading } = usePizzas();
  
  // Get the first 3 pizzas for the featured section
  const featuredPizzas = allPizzas.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-20 bg-menu-texture">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-title">Fan Favorites</h2>
              <Link to="/menu" className="flex items-center text-ghibli-brown font-medium hover:underline">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {isLoading ? (
              <div className="text-center py-10">
                <p className="text-ghibli-slate">Loading pizzas...</p>
              </div>
            ) : featuredPizzas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPizzas.map(pizza => (
                  <PizzaCard 
                    key={pizza.id}
                    id={Number(pizza.id)}
                    name={pizza.name}
                    description={pizza.description || ''}
                    price={pizza.price}
                    image={pizza.image_url || 'https://i.imgur.com/sCRmHqz.jpg'} // Default image
                    // These properties aren't in our database yet
                    rating={0}
                    isNew={false}
                    isVegetarian={false}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-ghibli-slate">No pizzas found. Add some in the admin panel!</p>
              </div>
            )}
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-20 bg-ghibli-blue/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title">Ready to Order?</h2>
            <p className="text-lg text-ghibli-slate max-w-2xl mx-auto mb-8">
              Experience the magic of Ghibli Pizza delivered straight to your door. Order online for pickup or delivery!
            </p>
            <Link to="/menu" className="ghibli-button inline-block">
              Order Now
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
