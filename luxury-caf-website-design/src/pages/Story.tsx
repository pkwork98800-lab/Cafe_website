import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Legacy</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-espresso mb-8 italic">The Aurelia Story</h1>
          <p className="text-espresso/60 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A journey that began in the lush coffee estates of the South, blossoming into a sanctuary for coffee purists and culinary enthusiasts alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-espresso leading-tight">Meticulous Sourcing, <br/>Uncompromising Quality.</h2>
            <p className="text-espresso/60 text-lg font-light leading-relaxed">
              Every bean at Aurelia is hand-selected. We travel across continents to meet the farmers who nurture the soil. From the high-altitude hills of Ethiopia to the volcanic slopes of Guatemala, our sourcing is as much about relationships as it is about flavor.
            </p>
            <p className="text-espresso/60 text-lg font-light leading-relaxed">
              We pay 30% above Fair Trade prices because we believe excellence deserves to be rewarded. This commitment ensures that the families behind your morning cup can continue their craft for generations.
            </p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
              alt="Coffee Sourcing" 
              className="rounded-[3rem] shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-espresso text-cream rounded-[4rem] p-12 md:p-24 overflow-hidden relative mb-32">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <h3 className="text-5xl font-serif font-bold text-gold mb-2">2014</h3>
              <p className="text-cream/40 uppercase tracking-widest text-xs font-bold">First Roast</p>
            </div>
            <div>
              <h3 className="text-5xl font-serif font-bold text-gold mb-2">150+</h3>
              <p className="text-cream/40 uppercase tracking-widest text-xs font-bold">Partner Farms</p>
            </div>
            <div>
              <h3 className="text-5xl font-serif font-bold text-gold mb-2">12</h3>
              <p className="text-cream/40 uppercase tracking-widest text-xs font-bold">Global Awards</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-espresso mb-12">Visit the Roastery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="group overflow-hidden rounded-3xl relative aspect-square">
                <img 
                  src={`/roastery-${i}.jpg`} 
                  alt={`Roastery View ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
