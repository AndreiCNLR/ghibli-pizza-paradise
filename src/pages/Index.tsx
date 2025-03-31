
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PizzaCard from '@/components/PizzaCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredPizzas = [
  {
    id: 1,
    name: "Totoro's Forest Feast",
    description: "Wild mushrooms, spinach, caramelized onions, and truffle oil on our signature herb crust.",
    price: 16.99,
    image: "https://i.imgur.com/FqSkpLU.jpg",
    rating: 4.8,
    isNew: true,
    isVegetarian: true
  },
  {
    id: 2,
    name: "Howl's Moving Castle",
    description: "Spicy chorizo, roasted red peppers, mozzarella, and smoked gouda with a drizzle of garlic aioli.",
    price: 18.99,
    image: "https://i.imgur.com/TT4hqsY.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Spirited Margherita",
    description: "Fresh buffalo mozzarella, basil, cherry tomatoes, and extra virgin olive oil on a thin, crispy crust.",
    price: 15.99,
    image: "https://i.imgur.com/6YLHVBs.jpg",
    rating: 4.7,
    isVegetarian: true
  }
];

const Index: React.FC = () => {
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPizzas.map(pizza => (
                <PizzaCard key={pizza.id} {...pizza} />
              ))}
            </div>
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
