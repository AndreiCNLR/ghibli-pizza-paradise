
import React from 'react';
import PizzaCard from '@/components/PizzaCard';
import { Pizza } from '@/hooks/use-pizzas';

interface PizzaGridProps {
  pizzas: Pizza[];
  isLoading: boolean;
}

const PizzaGrid: React.FC<PizzaGridProps> = ({ pizzas, isLoading }) => {
  return (
    <section className="py-12 bg-menu-texture">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="text-center py-20">
            <p className="text-ghibli-slate">Loading pizzas...</p>
          </div>
        ) : pizzas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pizzas.map(pizza => (
              <PizzaCard 
                key={pizza.id}
                id={Number(pizza.id)}
                name={pizza.name}
                description={pizza.description || ''}
                price={pizza.price}
                image={pizza.image_url || 'https://i.imgur.com/sCRmHqz.jpg'} // Default image
                // These properties aren't in our database yet, so we'll default them
                rating={0}
                isNew={false}
                isVegetarian={false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-ghibli-forest mb-2">No pizzas found</h3>
            <p className="text-ghibli-slate">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PizzaGrid;
