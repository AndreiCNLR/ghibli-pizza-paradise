
import React from 'react';

const MenuHero: React.FC = () => {
  return (
    <div className="relative h-[300px] bg-ghibli-forest">
      <div className="absolute inset-0 bg-menu-texture opacity-10"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Magical Menu</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Explore our selection of hand-crafted pizzas inspired by the enchanting worlds of Studio Ghibli
        </p>
      </div>
    </div>
  );
};

export default MenuHero;
