import React from 'react';
import { Camera, Globe, Share2, Mail, Phone, MapPin, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-espresso text-cream pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-gold" />
              <span className="text-3xl font-serif font-bold tracking-tighter">AURELIA</span>
            </Link>
            <p className="text-cream/40 font-light leading-relaxed">
              Crafting exceptional moments through artisanal coffee and culinary excellence. Join our community of flavor seekers.
            </p>
            <div className="flex gap-4">
              {[Camera, Globe, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Our Story', href: '/story' },
                { name: 'Menu', href: '/menu' },
                { name: 'Reservations', href: '/reservations' },
                { name: 'Events', href: '#' },
                { name: 'Careers', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-cream/40 hover:text-gold transition-colors text-sm font-medium tracking-wide">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-cream/40 hover:text-gold transition-colors text-sm font-medium tracking-wide">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-cream/40 text-sm leading-relaxed">
                  123 Artisanal Street, <br />
                  Koramangala, Bangalore 560034
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-cream/40 text-sm">+91 80 4567 8900</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-cream/40 text-sm">hello@aurelia.cafe</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm">
                <span className="text-cream/40">Mon — Fri</span>
                <span className="font-bold">08:00 — 21:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-cream/40">Sat — Sun</span>
                <span className="font-bold">09:00 — 22:00</span>
              </li>
              <li className="pt-8">
                <div className="bg-mocha/20 p-6 rounded-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Newsletter</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="bg-transparent border-b border-cream/10 py-2 text-sm focus:border-gold outline-none flex-grow"
                    />
                    <button className="p-2 text-gold">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/5 flex flex-col md:row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-cream/20 text-xs">
            © 2024 Aurelia Artisanal Coffee & Kitchen. All rights reserved.
          </p>
          <div className="flex gap-8 text-cream/20 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
