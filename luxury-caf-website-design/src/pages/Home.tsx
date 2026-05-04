import React from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="rounded-[3rem] overflow-hidden aspect-[4/5]"
              >
                <img src="/latte-art.jpg" alt="Artisan Coffee" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold rounded-[2rem] p-8 hidden md:flex flex-col justify-end text-espresso"
              >
                <p className="text-3xl font-serif font-bold leading-tight mb-2">12+</p>
                <p className="text-sm font-bold tracking-widest uppercase opacity-60">Award-Winning Blends</p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Beyond the Bean</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-espresso leading-tight">
                Where Tradition Meets <br />
                <span className="italic font-light">Innovation.</span>
              </h2>
              <div className="space-y-6 text-espresso/60 font-light leading-relaxed text-lg">
                <p>
                  Founded with a simple vision: to elevate the coffee experience into an art form. At Aurelia, we source our beans from small-batch sustainable farms across Ethiopia, Colombia, and India.
                </p>
              </div>
              <Link to="/story" className="inline-flex items-center gap-2 text-espresso font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-2 hover:text-gold transition-colors">
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="py-24 bg-cream overflow-hidden border-b border-mocha/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4">The Selection</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-espresso mb-8">Curated For You</h2>
          <Link to="/menu" className="bg-espresso text-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Community/Social Section */}
      <section className="py-24 bg-white overflow-hidden">
          <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4">Join the Community</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-espresso">@AureliaCafe</h2>
            </div>
            <button className="bg-white px-8 py-4 rounded-full text-espresso font-bold tracking-widest uppercase text-xs border border-mocha/10 hover:bg-espresso hover:text-cream transition-all duration-300">
              Follow Our Journey
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-12 no-scrollbar px-6 md:px-12">
            {[
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
              "https://images.unsplash.com/photo-1511920170033-f8396924c348",
              "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
              "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
              "https://images.unsplash.com/photo-1507133750040-4a8f5700817f"
            ].map((url, i) => (
              <div key={i} className="min-w-[300px] h-[400px] rounded-3xl overflow-hidden bg-mocha/10 flex-shrink-0">
                <img 
                  src={`${url}?auto=format&fit=crop&q=80&w=400&h=500`} 
                  alt="Social Feed" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Visit Section */}
        <section className="py-24 px-6 md:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
             <div className="bg-espresso text-cream rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-20 space-y-12">
                   <div>
                      <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4">Visit Us</span>
                      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">The Experience Awaits.</h2>
                      <p className="text-cream/40 font-light text-lg">Located in the heart of the city, our flagship café offers a serene escape from the bustle.</p>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Location</h4>
                         <p className="text-sm font-light leading-relaxed">123 Artisanal Street,<br/>Koramangala, Bangalore 560034</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Hours</h4>
                         <p className="text-sm font-light leading-relaxed">Mon — Fri: 08:00 — 21:00<br/>Sat — Sun: 09:00 — 22:00</p>
                      </div>
                   </div>

                   <button className="w-full md:w-auto bg-gold text-espresso font-bold py-5 px-12 rounded-2xl hover:bg-white transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-xl">
                      Get Directions
                   </button>
                </div>
                <div className="relative min-h-[400px]">
                   <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                    alt="Café Interior" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                   />
                </div>
             </div>
          </div>
        </section>
    </>
  );
};
