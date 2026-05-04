import React from 'react';
import { ReservationSection } from '../components/ReservationSection';

export const ReservationsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-espresso">
      <ReservationSection />
      
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-espresso mb-4">Event Bookings</h2>
            <p className="text-espresso/60 max-w-2xl mx-auto font-light">
              Hosting a private event? From corporate gatherings to intimate celebrations, our spaces are available for full buyout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cream p-12 rounded-[3rem] space-y-6">
              <h3 className="text-2xl font-serif font-bold">The Mezzanine</h3>
              <p className="text-sm text-espresso/60 font-light">Capacity: 25 Seated | 40 Standing</p>
              <button className="text-gold font-bold uppercase tracking-widest text-xs border-b border-gold pb-1">Inquire Now</button>
            </div>
            <div className="bg-cream p-12 rounded-[3rem] space-y-6">
              <h3 className="text-2xl font-serif font-bold">The Garden Courtyard</h3>
              <p className="text-sm text-espresso/60 font-light">Capacity: 50 Seated | 80 Standing</p>
              <button className="text-gold font-bold uppercase tracking-widest text-xs border-b border-gold pb-1">Inquire Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
