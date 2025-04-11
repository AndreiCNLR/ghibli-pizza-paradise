
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Povestea Noastră Magică</h2>
          <p className="text-lg text-ghibli-slate max-w-3xl mx-auto">
            De la o bucătărie mică cu vise mari la o pizzerie iubită de comunitate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="ghibli-card text-center">
            <div className="w-16 h-16 bg-ghibli-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ghibli-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ghibli-forest mb-3">Ingrediente de Calitate</h3>
            <p className="text-ghibli-slate">
              Folosim ingrediente proaspete și locale care sunt la fel de magice ca lumile care ne inspiră. Fiecare pizza este pregătită cu grijă și atenție la detalii.
            </p>
          </div>
          
          <div className="ghibli-card text-center">
            <div className="w-16 h-16 bg-ghibli-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ghibli-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ghibli-forest mb-3">Creații Fantastice</h3>
            <p className="text-ghibli-slate">
              Rețetele noastre de pizza sunt inspirate de detaliile fermecătoare ale filmelor Ghibli, aducând magia animației în farfuria ta prin combinații unice de arome.
            </p>
          </div>
          
          <div className="ghibli-card text-center">
            <div className="w-16 h-16 bg-ghibli-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ghibli-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ghibli-forest mb-3">Iubirea Comunității</h3>
            <p className="text-ghibli-slate">
              La fel ca comunitățile calde din filmele Ghibli, ne străduim să creăm un spațiu primitor unde mâncarea aduce oamenii împreună.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-ghibli-cream rounded-3xl overflow-hidden ghibli-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl font-bold text-ghibli-forest mb-6">Filozofia Noastră despre Pizza</h3>
              <p className="text-ghibli-slate mb-6">
                La Ghibli Pizza, credem că mâncarea ar trebui să fie o experiență care te transportă undeva magic. Așa cum Studio Ghibli creează lumi care îți captează imaginația, noi creăm pizze care îți cuceresc inima cu fiecare mușcătură.
              </p>
              <p className="text-ghibli-slate">
                Aluatul nostru este făcut proaspăt în fiecare zi folosind o rețetă secretă de familie care a fost perfecționată de generații. Îl lăsăm să crească încet, oferindu-i textura perfectă - crocant la exterior, moale și elastic în interior.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://i.imgur.com/dkT3GF4.jpg" 
                alt="Bucătarul pregătind aluat de pizza" 
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
