
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-ghibli-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ghibli-cloud rounded-full opacity-80 cloud-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-ghibli-cloud rounded-full opacity-60 cloud-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-ghibli-cloud rounded-full opacity-70 cloud-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ghibli-forest mb-6 leading-tight">
            Pizza Magică dintr-o Bucătărie Fantastică
          </h1>
          <p className="text-lg md:text-xl text-ghibli-slate mb-8">
            Experimentați pizzele noastre artizanale inspirate de lumile fermecate ale Studio Ghibli. Fiecare înghițitură este o aventură de arome care te va transporta într-un tărâm magic.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/menu" className="ghibli-button text-center">
              Vezi Meniul Nostru
            </Link>
            <Link to="#" className="px-6 py-3 rounded-full border-2 border-ghibli-brown text-ghibli-brown font-medium hover:bg-ghibli-brown hover:text-white transition-colors text-center">
              Comandă Online
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden ghibli-shadow">
            <div className="absolute inset-0 bg-gradient-to-r from-ghibli-forest/20 to-transparent z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMhqWYem3UbV5k6CgDOM1nLBHKkjVOg9xRPEFzd=s1360-w1360-h1020" 
              alt="Pizza inspirată de Ghibli cu garnituri magice" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -right-4 md:right-8 top-10 bg-white rounded-full py-2 px-4 ghibli-shadow animate-bounce-slight">
            <span className="text-ghibli-forest font-bold">Nou! Ediție Limitată</span>
          </div>
          
          {/* Flour dust particles */}
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ghibli-cream rounded-full opacity-40"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-ghibli-cream rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
