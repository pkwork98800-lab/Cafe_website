import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero-cafe.jpg" 
          alt="Luxury Café Interior" 
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6">
            EST. 2024 • Artisanal Excellence
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif font-bold leading-tight mb-8">
            The Art of <br />
            <span className="italic font-light">Slow Living.</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance">
            Escape the ordinary at Aurelia. Where every bean tells a story and every cup is a masterpiece crafted with precision and passion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservations" className="group relative px-10 py-5 bg-gold text-espresso font-bold tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Reserve a Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/story" className="group flex items-center gap-4 text-white hover:text-gold transition-colors duration-300">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors">
                <Play className="w-5 h-5 fill-white group-hover:fill-gold transition-colors" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Our Story</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
