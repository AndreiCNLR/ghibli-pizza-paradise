
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PizzaCard from '@/components/PizzaCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Percent } from 'lucide-react';
import { usePizzas } from '@/hooks/use-pizzas';
import { useAuth } from '@/contexts/AuthContext';
import { Helmet } from "react-helmet-async";

const Index: React.FC = () => {
  const { data: allPizzas = [], isLoading } = usePizzas();
  const { user } = useAuth();
  
  // Get the first 3 pizzas for the featured section
  const featuredPizzas = allPizzas.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ghibli Pizza Paradise - Livrare de Pizza Magică</title>
        <meta name="description" content="Ghibli Pizza Paradise oferă pizza magică inspirată de Studio Ghibli pentru livrare și ridicare. Comandă online pentru a gusta o pizza fantastică și delicioasă." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {user && (
          <section className="py-6 bg-ghibli-green/10">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 text-lg font-medium text-ghibli-forest">
                <Percent className="h-5 w-5 text-ghibli-green" />
                <span>Membrii primesc 20% reducere la toate pizzele!</span>
                <Link to="/member-discounts" className="text-ghibli-green font-bold hover:underline ml-2">
                  Vezi Reducerile
                </Link>
              </div>
            </div>
          </section>
        )}
        
        <section className="py-20 bg-menu-texture">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-title">Favoritele Fanilor</h2>
              <Link to="/menu" className="flex items-center text-ghibli-brown font-medium hover:underline">
                Vezi Meniul Complet <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {isLoading ? (
              <div className="text-center py-10">
                <p className="text-ghibli-slate">Se încarcă pizzele...</p>
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
                    image={pizza.image_url || 'https://lh3.googleusercontent.com/p/AF1QipMhqWYem3UbV5k6CgDOM1nLBHKkjVOg9xRPEFzd=s1360-w1360-h1020'} // Default image
                    // These properties aren't in our database yet
                    rating={0}
                    isNew={false}
                    isVegetarian={false}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-ghibli-slate">Nu s-au găsit pizze. Adaugă unele în panoul de administrare!</p>
              </div>
            )}
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-20 bg-ghibli-blue/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title">Gata de Comandă?</h2>
            <p className="text-lg text-ghibli-slate max-w-2xl mx-auto mb-8">
              Experimentează magia pizzei Ghibli livrată direct la ușa ta. Comandă online pentru ridicare sau livrare!
            </p>
            {user ? (
              <div className="space-y-4">
                <Link to="/menu" className="ghibli-button inline-block">
                  Comandă Acum
                </Link>
                <div className="flex items-center justify-center gap-2 text-ghibli-forest mt-4">
                  <Percent className="h-5 w-5 text-ghibli-green" />
                  <span>Nu uita de reducerea ta de 20% pentru membri!</span>
                  <Link to="/member-discounts" className="text-ghibli-green font-bold hover:underline ml-2">
                    Vezi Meniul cu Reduceri
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Link to="/menu" className="ghibli-button inline-block">
                  Comandă Acum
                </Link>
                <p className="text-sm text-ghibli-slate mt-4">
                  <Link to="/auth" className="text-ghibli-green hover:underline">Conectează-te</Link> pentru a primi reduceri exclusive pentru membri!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
