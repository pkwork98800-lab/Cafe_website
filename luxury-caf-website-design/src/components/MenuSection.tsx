import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Info, Leaf, Wheat } from 'lucide-react';
import { cn } from '../utils/cn';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badges?: ('vegan' | 'gf' | 'df')[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Single Origin Pour Over',
    description: 'Ethiopian Yirgacheffe with notes of jasmine, lemon, and peach.',
    price: 450,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1544787210-2211d44b565d?q=80&w=400&auto=format&fit=crop',
    badges: ['vegan', 'gf']
  },
  {
    id: '2',
    name: 'Velvet Flat White',
    description: 'Micro-foamed milk poured over our signature House Blend espresso.',
    price: 380,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop',
    badges: ['gf']
  },
  {
    id: '3',
    name: 'Almond Croissant',
    description: 'Double-baked buttery pastry with frangipane and toasted almonds.',
    price: 320,
    category: 'Bakery',
    image: '/pastry.jpg',
  },
  {
    id: '4',
    name: 'Smashed Avocado Toast',
    description: 'Sourdough, heirloom tomatoes, dukkah, and a poached egg.',
    price: 550,
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop',
    badges: ['vegan']
  },
  {
    id: '5',
    name: 'Smoked Salmon Bagel',
    description: 'Cream cheese, capers, red onion, and fresh dill on a toasted bagel.',
    price: 680,
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Cold Brew Negroni',
    description: 'A sophisticated non-alcoholic twist on the classic Italian cocktail.',
    price: 420,
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop',
    badges: ['vegan', 'gf']
  }
];

const CATEGORIES = ['All', 'Coffee', 'Bakery', 'Kitchen', 'Specialty'];

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Taste the Exceptional
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-espresso mb-8"
          >
            Our Curated Menu
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300',
                  activeCategory === cat 
                    ? 'bg-espresso text-cream' 
                    : 'bg-white text-espresso/60 hover:text-espresso border border-espresso/5'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-mocha/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.badges?.includes('vegan') && (
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-green-700 shadow-sm" title="Vegan">
                        <Leaf className="w-4 h-4" />
                      </div>
                    )}
                    {item.badges?.includes('gf') && (
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-orange-700 shadow-sm" title="Gluten Free">
                        <Wheat className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-espresso">{item.name}</h3>
                    <span className="text-gold font-bold text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-espresso/60 text-sm mb-8 font-light leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <button className="text-espresso/40 hover:text-espresso transition-colors">
                      <Info className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="flex items-center gap-2 bg-espresso text-cream px-6 py-3 rounded-2xl hover:bg-gold transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                    >
                      <Plus className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 border-2 border-espresso text-espresso font-bold tracking-[0.2em] uppercase rounded-full hover:bg-espresso hover:text-cream transition-all duration-300">
            Download PDF Menu
          </button>
        </div>
      </div>
    </section>
  );
};
