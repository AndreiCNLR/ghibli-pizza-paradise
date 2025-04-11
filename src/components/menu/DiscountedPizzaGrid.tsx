
import React from 'react';
import { Pizza } from '@/hooks/use-pizzas';
import { Percent } from 'lucide-react';

interface ExtendedPizza extends Pizza {
  originalPrice: number;
}

interface DiscountedPizzaGridProps {
  pizzas: ExtendedPizza[];
  isLoading: boolean;
}

const DiscountedPizzaGrid: React.FC<DiscountedPizzaGridProps> = ({ pizzas, isLoading }) => {
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
              <div key={pizza.id} className="pizza-card group">
                <div className="relative overflow-hidden h-52">
                  <img 
                    src={pizza.image_url || 'https://i.imgur.com/sCRmHqz.jpg'} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-ghibli-green text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Percent className="h-3 w-3 mr-1" />
                    20% OFF
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-ghibli-forest mb-2">{pizza.name}</h3>
                  <p className="text-ghibli-slate text-sm mb-4 line-clamp-2">{pizza.description || ''}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-ghibli-green">${pizza.price.toFixed(2)}</span>
                      <span className="ml-2 text-sm text-ghibli-slate line-through">${pizza.originalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-ghibli-brown text-white flex items-center justify-center transition-transform hover:scale-110">
                      <span className="sr-only">Add to cart</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-ghibli-forest mb-2">No pizzas found</h3>
            <p className="text-ghibli-slate">
              We're updating our menu. Please check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscountedPizzaGrid;
