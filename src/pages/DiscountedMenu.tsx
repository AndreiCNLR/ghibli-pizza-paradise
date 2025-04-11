
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePizzas } from '@/hooks/use-pizzas';
import MenuHero from '@/components/menu/MenuHero';
import PizzaGrid from '@/components/menu/DiscountedPizzaGrid';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const DiscountedMenu: React.FC = () => {
  const { data: allPizzas = [], isLoading } = usePizzas();
  const { user } = useAuth();

  // Redirect unauthenticated users to the login page
  if (!user) {
    toast({
      title: "Authentication Required",
      description: "Please login to view discounted prices",
      variant: "destructive",
    });
    return <Navigate to="/auth" />;
  }
  
  // Apply 20% discount to all pizzas
  const discountedPizzas = allPizzas.map(pizza => ({
    ...pizza,
    originalPrice: pizza.price,
    price: Number((pizza.price * 0.8).toFixed(2)) // 20% off, rounded to 2 decimal places
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <MenuHero />
        
        <section className="py-12 bg-ghibli-green/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-ghibli-forest mb-4">Members-Only Discounts</h2>
            <p className="text-lg text-ghibli-slate max-w-2xl mx-auto mb-8">
              As a valued member, you get exclusive access to 20% off all our magical pizzas!
            </p>
          </div>
        </section>
        
        <PizzaGrid 
          pizzas={discountedPizzas}
          isLoading={isLoading}
        />
        
        <section className="py-12 bg-ghibli-green/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-ghibli-forest mb-4">Ready to Order?</h2>
            <p className="text-ghibli-slate max-w-2xl mx-auto mb-8">
              Take advantage of your special member pricing today!
            </p>
            <button className="ghibli-button inline-block">
              Order Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiscountedMenu;
