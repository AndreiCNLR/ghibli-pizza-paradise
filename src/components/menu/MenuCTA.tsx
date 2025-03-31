
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const MenuCTA: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="py-16 bg-ghibli-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ghibli-forest mb-4">Can't Decide?</h2>
        <p className="text-ghibli-slate max-w-2xl mx-auto mb-8">
          Our chefs create daily specials inspired by the magic of Studio Ghibli films. Ask about our special of the day when you order!
        </p>
        {user ? (
          <button className="ghibli-button">
            Order Now
          </button>
        ) : (
          <div className="space-y-4">
            <button className="ghibli-button">
              Order Now
            </button>
            <p className="text-ghibli-slate text-sm mt-2">
              Want to save your favorite orders? <Link to="/auth" className="text-ghibli-brown hover:underline">Login or create an account</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuCTA;
