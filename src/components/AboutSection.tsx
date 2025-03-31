
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Magical Story</h2>
          <p className="text-lg text-ghibli-slate max-w-3xl mx-auto">
            From a small kitchen with big dreams to a beloved community pizzeria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="ghibli-card text-center">
            <div className="w-16 h-16 bg-ghibli-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ghibli-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ghibli-forest mb-3">Quality Ingredients</h3>
            <p className="text-ghibli-slate">
              We source fresh, local ingredients that are as magical as the worlds that inspire us. Every pizza is crafted with care and attention to detail.
            </p>
          </div>
          
          <div className="ghibli-card text-center">
            <div className="w-16 h-16 bg-ghibli-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ghibli-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ghibli-forest mb-3">Whimsical Creations</h3>
            <p className="text-ghibli-slate">
              Our pizza recipes are inspired by the enchanting details of Ghibli films, bringing the magic of animation to your plate through unique flavor combinations.
            </p>
          </div>
          
          <div className="ghibli-card text-center">
            <div className="w-16 h-16 bg-ghibli-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ghibli-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ghibli-forest mb-3">Community Love</h3>
            <p className="text-ghibli-slate">
              Like the heart-warming communities in Ghibli films, we strive to create a welcoming space where food brings people together.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-ghibli-cream rounded-3xl overflow-hidden ghibli-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl font-bold text-ghibli-forest mb-6">Our Pizza Philosophy</h3>
              <p className="text-ghibli-slate mb-6">
                At Ghibli Pizza, we believe that food should be an experience that transports you somewhere magical. Just as Studio Ghibli creates worlds that capture your imagination, we craft pizzas that capture your heart with every bite.
              </p>
              <p className="text-ghibli-slate">
                Our dough is made fresh daily using a secret family recipe that's been perfected over generations. We let it rise slowly, giving it that perfect texture - crispy on the outside, soft and chewy inside.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://i.imgur.com/dkT3GF4.jpg" 
                alt="Chef preparing pizza dough" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
