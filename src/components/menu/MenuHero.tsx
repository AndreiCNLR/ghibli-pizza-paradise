
import React from 'react';

const MenuHero: React.FC = () => {
  return (
    <div className="relative h-[300px] bg-gradient-to-r from-ghibli-forest to-ghibli-green">
      <div className="absolute inset-0 bg-menu-texture opacity-10"></div>
      <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-white rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meniul Nostru Magic</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Explorează selecția noastră de pizze artizanale inspirate de lumile fermecătoare ale Studio Ghibli
        </p>
      </div>
    </div>
  );
};

export default MenuHero;
