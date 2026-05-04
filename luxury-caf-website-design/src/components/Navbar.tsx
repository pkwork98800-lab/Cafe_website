import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

interface NavbarProps {
  onOrderClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Our Story', href: '/story' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Visit', href: '#footer' },
  ];

  const isHome = location.pathname === '/';
  const navColorClass = (isScrolled || !isHome) ? 'text-espresso' : 'text-white';
  const bgColorClass = (isScrolled || !isHome) ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12',
        bgColorClass,
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <Coffee className={cn('w-6 h-6 transition-colors', navColorClass)} />
          <span className={cn(
            'text-2xl font-serif font-bold tracking-tighter transition-colors',
            navColorClass
          )}>
            AURELIA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
               <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold',
                  navColorClass
                )}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold',
                  navColorClass,
                  location.pathname === link.href && 'text-gold'
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <button
            onClick={onOrderClick}
            className={cn(
              'flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300',
              (isScrolled || !isHome)
                ? 'bg-espresso text-cream border-espresso hover:bg-gold hover:border-gold' 
                : 'bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-espresso'
            )}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Order Now</span>
            {cartCount > 0 && (
              <span className="bg-gold text-espresso text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn('w-6 h-6', navColorClass)} />
          ) : (
            <MenuIcon className={cn('w-6 h-6', navColorClass)} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-xl border-t border-mocha/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif text-espresso hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-serif text-espresso hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <button
                onClick={onOrderClick}
                className="w-full bg-espresso text-cream py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="font-bold tracking-widest uppercase">Order Now ({cartCount})</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
