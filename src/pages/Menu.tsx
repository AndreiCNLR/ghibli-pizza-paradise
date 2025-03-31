import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePizzas } from '@/hooks/use-pizzas';
import MenuHero from '@/components/menu/MenuHero';
import SearchAndFilters from '@/components/menu/SearchAndFilters';
import PizzaGrid from '@/components/menu/PizzaGrid';
import MenuCTA from '@/components/menu/MenuCTA';

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
        <MenuHero />
        
        <SearchAndFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filterOptions={filterOptions}
        />
        
        <PizzaGrid 
          pizzas={filteredPizzas}
          isLoading={isLoading}
        />
        
        <MenuCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
