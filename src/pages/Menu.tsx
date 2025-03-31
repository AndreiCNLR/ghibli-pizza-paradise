import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PizzaCard from '@/components/PizzaCard';
import { Search } from 'lucide-react';
import { usePizzas } from '@/hooks/use-pizzas';

const Menu: React.FC = () => {
  const { data: allPizzas = [], isLoading } = usePizzas();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter pizzas based on search term and active filter
  const filteredPizzas = allPizzas.filter(pizza => {
    const matchesSearch = 
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (pizza.description && pizza.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeFilter === 'all') return matchesSearch;
    
    // Since we don't have these properties in the database yet, we'll skip filtering by them
    // We could add these columns to the database in the future
    // const isVegetarian = pizza.isVegetarian;
    // const isNew = pizza.isNew;
    // const category = pizza.category;
    
    return matchesSearch;
  });
  
  const filterOptions = [
    { id: 'all', label: 'All Pizzas' },
    // We'll keep these filters for UI consistency, but they won't filter anything yet
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'signature', label: 'Signature' },
    { id: 'classic', label: 'Classic' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[300px] bg-ghibli-forest">
          <div className="absolute inset-0 bg-menu-texture opacity-10"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Magical Menu</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore our selection of hand-crafted pizzas inspired by the enchanting worlds of Studio Ghibli
            </p>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="sticky top-[72px] z-20 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for pizzas..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ghibli-brown focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {filterOptions.map(option => (
                  <button
                    key={option.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === option.id
                        ? 'bg-ghibli-brown text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveFilter(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Pizza Grid */}
        <section className="py-12 bg-menu-texture">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-20">
                <p className="text-ghibli-slate">Loading pizzas...</p>
              </div>
            ) : filteredPizzas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPizzas.map(pizza => (
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
        
        {/* Call to Action */}
        <section className="py-16 bg-ghibli-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-ghibli-forest mb-4">Can't Decide?</h2>
            <p className="text-ghibli-slate max-w-2xl mx-auto mb-8">
              Our chefs create daily specials inspired by the magic of Studio Ghibli films. Ask about our special of the day when you order!
            </p>
            <button className="ghibli-button">
              Order Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
