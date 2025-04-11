
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSectionVariant from '@/components/HeroSectionVariant';
import AboutSection from '@/components/AboutSection';
import PizzaCard from '@/components/PizzaCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Percent } from 'lucide-react';
import { usePizzas } from '@/hooks/use-pizzas';
import { useAuth } from '@/contexts/AuthContext';
import { Helmet } from "react-helmet-async";

const AlternateLanding: React.FC = () => {
  const { data: allPizzas = [], isLoading } = usePizzas();
  const { user } = useAuth();
  
  // Get the first 3 pizzas for the featured section
  const featuredPizzas = allPizzas.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ghibli Pizza Paradise - Pizza Artizanală Inspirată de Magie</title>
        <meta name="description" content="Explorează universul pizzelor noastre magice, inspirate de Studio Ghibli. Comandă online pentru livrare sau ridicare și bucură-te de magia gustului autentic." />
        <link rel="canonical" href="/variant" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <HeroSectionVariant />
        
        {user && (
          <section className="py-8 bg-ghibli-green/20">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-3 text-lg font-medium text-ghibli-forest">
                <Percent className="h-5 w-5 text-ghibli-green" />
                <span>Membrii noștri primesc 20% reducere la toate pizzele!</span>
                <Link to="/member-discounts" className="text-ghibli-green font-bold hover:underline ml-2 underline">
                  Profită Acum
                </Link>
              </div>
            </div>
          </section>
        )}
        
        <section className="py-24 bg-menu-texture">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ghibli-forest">Cele Mai Populare Pizze</h2>
              <Link to="/menu" className="flex items-center text-ghibli-brown font-bold hover:underline group">
                Vezi Tot Meniul <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                    image={pizza.image_url || 'https://lh3.googleusercontent.com/p/AF1QipMhqWYem3UbV5k6CgDOM1nLBHKkjVOg9xRPEFzd=s1360-w1360-h1020'}
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
        
        <section className="py-20 bg-gradient-to-br from-ghibli-cloud/30 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ghibli-forest mb-6">Pregătit pentru o Experiență Culinară Magică?</h2>
            <p className="text-lg text-ghibli-slate max-w-2xl mx-auto mb-10">
              Experimentează magia pizzei Ghibli livrată direct la ușa ta. Comandă online pentru ridicare sau livrare!
            </p>
            {user ? (
              <div className="space-y-4">
                <Link to="/menu" className="px-8 py-4 bg-ghibli-brown text-white font-bold rounded-full text-lg hover:bg-ghibli-forest transition-colors shadow-lg inline-block">
                  Comandă Acum
                </Link>
                <div className="flex items-center justify-center gap-2 text-ghibli-forest mt-6">
                  <Percent className="h-5 w-5 text-ghibli-green" />
                  <span>Nu uita de reducerea ta de 20% pentru membri!</span>
                  <Link to="/member-discounts" className="text-ghibli-green font-bold hover:underline ml-2">
                    Vezi Meniul cu Reduceri
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <Link to="/menu" className="px-8 py-4 bg-ghibli-brown text-white font-bold rounded-full text-lg hover:bg-ghibli-forest transition-colors shadow-lg inline-block">
                  Comandă Acum
                </Link>
                <p className="text-sm text-ghibli-slate block">
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

export default AlternateLanding;
