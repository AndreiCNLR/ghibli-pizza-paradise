
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSectionVariant: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-ghibli-forest/10 to-ghibli-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://lh3.googleusercontent.com/p/AF1QipMhqWYem3UbV5k6CgDOM1nLBHKkjVOg9xRPEFzd=s1360-w1360-h1020')] bg-center bg-cover"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-16 h-16 bg-ghibli-cloud rounded-full opacity-60 cloud-float"></div>
      <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-ghibli-cloud rounded-full opacity-70 cloud-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ghibli-forest mb-8 leading-tight">
            Gust Aburi și Povești de Arome
          </h1>
          <p className="text-xl md:text-2xl text-ghibli-slate mb-10 max-w-2xl mx-auto">
            Descoperă pizza noastră artizanală, făcută cu dragoste și inspirată din poveștile fermecate ale Studio Ghibli.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/menu" className="px-8 py-4 bg-ghibli-brown text-white font-bold rounded-full text-lg hover:bg-ghibli-forest transition-colors shadow-lg">
              Explorează Meniul
            </Link>
            <Link to="#" className="px-8 py-4 rounded-full border-2 border-ghibli-brown text-ghibli-brown font-bold hover:bg-ghibli-brown hover:text-white transition-colors text-lg">
              Comandă Acum
            </Link>
          </div>
        </div>
        
        <div className="w-full max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-ghibli-forest/60 to-transparent z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMhqWYem3UbV5k6CgDOM1nLBHKkjVOg9xRPEFzd=s1360-w1360-h1020" 
              alt="Pizza cu inspirație magică" 
              className="w-full object-cover h-[400px] md:h-[500px]"
            />
            
            {/* Featured badge */}
            <div className="absolute top-6 right-6 bg-ghibli-green text-white rounded-full py-2 px-4 font-bold shadow-lg rotate-3 z-20">
              Ediție Limitată
            </div>
            
            {/* Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Pizza Totoro cu Trufe</h2>
              <p className="text-lg md:text-xl mb-6 max-w-xl">Combinație specială de trufe, ciuperci sălbatice și brânzeturi premium</p>
              <Link to="/menu" className="inline-block bg-white text-ghibli-forest px-6 py-3 rounded-full font-bold hover:bg-ghibli-cream transition-colors">
                Vezi Detalii
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-ghibli-cream flex items-center justify-center mb-3">
              <span className="text-ghibli-forest text-2xl font-bold">🍕</span>
            </div>
            <p className="text-ghibli-forest font-medium">Ingrediente Locale</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-ghibli-cream flex items-center justify-center mb-3">
              <span className="text-ghibli-forest text-2xl font-bold">⏱️</span>
            </div>
            <p className="text-ghibli-forest font-medium">Livrare Rapidă</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-ghibli-cream flex items-center justify-center mb-3">
              <span className="text-ghibli-forest text-2xl font-bold">🥇</span>
            </div>
            <p className="text-ghibli-forest font-medium">Calitate Premium</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-ghibli-cream flex items-center justify-center mb-3">
              <span className="text-ghibli-forest text-2xl font-bold">💚</span>
            </div>
            <p className="text-ghibli-forest font-medium">Eco Friendly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionVariant;
