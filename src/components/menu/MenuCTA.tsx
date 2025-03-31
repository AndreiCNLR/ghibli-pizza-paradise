
import React from 'react';

const MenuCTA: React.FC = () => {
  return (
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
  );
};

export default MenuCTA;
