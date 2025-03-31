
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AuthNavItems from './AuthNavItems';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-ghibli-brown flex items-center justify-center">
            <span className="text-white font-bold">GP</span>
          </div>
          <span className="text-xl font-bold text-ghibli-forest">Ghibli Pizza</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-ghibli-brown transition-colors ${
              isActive('/') ? 'text-ghibli-brown' : 'text-ghibli-forest'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`font-medium hover:text-ghibli-brown transition-colors ${
              isActive('/menu') ? 'text-ghibli-brown' : 'text-ghibli-forest'
            }`}
          >
            Our Pizzas
          </Link>
          <Link 
            to="#" 
            className="ghibli-button"
          >
            Order Now
          </Link>
        </div>

        {/* Auth Navigation */}
        <div className="hidden md:flex">
          <AuthNavItems />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-ghibli-forest" />
          ) : (
            <Menu className="h-6 w-6 text-ghibli-forest" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-accordion-down">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 font-medium hover:text-ghibli-brown transition-colors ${
                isActive('/') ? 'text-ghibli-brown' : 'text-ghibli-forest'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`block py-2 font-medium hover:text-ghibli-brown transition-colors ${
                isActive('/menu') ? 'text-ghibli-brown' : 'text-ghibli-forest'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Pizzas
            </Link>
            <Link 
              to="#" 
              className="block py-2 ghibli-button text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
            <div className="py-2">
              <AuthNavItems />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
