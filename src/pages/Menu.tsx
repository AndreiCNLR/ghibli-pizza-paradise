
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PizzaCard from '@/components/PizzaCard';
import { Search, Filter } from 'lucide-react';

// Pizza data
const allPizzas = [
  {
    id: 1,
    name: "Totoro's Forest Feast",
    description: "Wild mushrooms, spinach, caramelized onions, and truffle oil on our signature herb crust.",
    price: 16.99,
    image: "https://i.imgur.com/FqSkpLU.jpg",
    rating: 4.8,
    isNew: true,
    isVegetarian: true,
    category: "signature"
  },
  {
    id: 2,
    name: "Howl's Moving Castle",
    description: "Spicy chorizo, roasted red peppers, mozzarella, and smoked gouda with a drizzle of garlic aioli.",
    price: 18.99,
    image: "https://i.imgur.com/TT4hqsY.jpg",
    rating: 4.9,
    category: "signature"
  },
  {
    id: 3,
    name: "Spirited Margherita",
    description: "Fresh buffalo mozzarella, basil, cherry tomatoes, and extra virgin olive oil on a thin, crispy crust.",
    price: 15.99,
    image: "https://i.imgur.com/6YLHVBs.jpg",
    rating: 4.7,
    isVegetarian: true,
    category: "classic"
  },
  {
    id: 4,
    name: "Kiki's Delivery Special",
    description: "A delightful mix of ham, pineapple, bell peppers, and our special herb-infused tomato sauce.",
    price: 17.99,
    image: "https://i.imgur.com/BvytVvq.jpg", 
    rating: 4.5,
    category: "signature"
  },
  {
    id: 5,
    name: "Castle in the Sky Supreme",
    description: "Pepperoni, Italian sausage, bell peppers, onions, olives, and mushrooms piled high.",
    price: 19.99,
    image: "https://i.imgur.com/hGFZFZA.jpg",
    rating: 4.6,
    category: "signature"
  },
  {
    id: 6,
    name: "Princess Mononoke Meat Lover's",
    description: "Pepperoni, bacon, ham, Italian sausage, and ground beef with mozzarella and cheddar cheeses.",
    price: 20.99,
    image: "https://i.imgur.com/BivZoK7.jpg",
    rating: 4.8,
    category: "signature"
  },
  {
    id: 7,
    name: "Ponyo Seafood Delight",
    description: "Shrimp, crab meat, clams, and mozzarella with a light garlic butter sauce and fresh herbs.",
    price: 21.99,
    image: "https://i.imgur.com/2GDQOFg.jpg",
    rating: 4.7,
    isNew: true,
    category: "signature"
  },
  {
    id: 8,
    name: "Classic Cheese",
    description: "Our signature tomato sauce topped with a generous layer of mozzarella cheese on a perfect crust.",
    price: 14.99,
    image: "https://i.imgur.com/sCRmHqz.jpg",
    rating: 4.5,
    isVegetarian: true,
    category: "classic"
  },
  {
    id: 9,
    name: "Garden Vegetable",
    description: "Fresh tomatoes, bell peppers, red onions, mushrooms, and black olives on a bed of mozzarella.",
    price: 16.99,
    image: "https://i.imgur.com/bxaA4SX.jpg",
    rating: 4.6,
    isVegetarian: true,
    category: "classic"
  }
];

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter pizzas based on search term and active filter
  const filteredPizzas = allPizzas.filter(pizza => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'vegetarian') return matchesSearch && pizza.isVegetarian;
    if (activeFilter === 'new') return matchesSearch && pizza.isNew;
    if (activeFilter === 'signature') return matchesSearch && pizza.category === 'signature';
    if (activeFilter === 'classic') return matchesSearch && pizza.category === 'classic';
    
    return matchesSearch;
  });
  
  const filterOptions = [
    { id: 'all', label: 'All Pizzas' },
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
            {filteredPizzas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} {...pizza} />
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
