
import React from 'react';
import { Plus, Star } from 'lucide-react';

interface PizzaCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  isVegetarian?: boolean;
}

const PizzaCard: React.FC<PizzaCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  rating = 0,
  isNew = false,
  isVegetarian = false
}) => {
  return (
    <div className="pizza-card group">
      <div className="relative overflow-hidden h-52">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-ghibli-blue text-white text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </span>
          )}
          
          {isVegetarian && (
            <span className="bg-ghibli-green text-white text-xs font-bold px-3 py-1 rounded-full">
              VEG
            </span>
          )}
        </div>
        
        {/* Rating */}
        {rating > 0 && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-xs font-bold text-ghibli-forest">
            <Star className="h-3 w-3 mr-1 fill-ghibli-brown text-ghibli-brown" />
            {rating.toFixed(1)}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-ghibli-forest mb-2">{name}</h3>
        <p className="text-ghibli-slate text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-ghibli-brown">${price.toFixed(2)}</span>
          <button className="w-10 h-10 rounded-full bg-ghibli-brown text-white flex items-center justify-center transition-transform hover:scale-110">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
