import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-24 px-6 md:px-12 bg-espresso text-cream overflow-hidden relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-mocha/10 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Reserve Your Moment
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              An Elevated <br />
              <span className="italic font-light">Dining Experience.</span>
            </h2>
            <p className="text-cream/60 text-lg mb-12 font-light leading-relaxed max-w-lg">
              Whether it's a quiet morning reflection or a celebratory brunch, we ensure your table is ready for the perfect experience.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: CheckCircle2, text: 'Real-time availability' },
                { icon: CheckCircle2, text: 'Instant confirmation via SMS' },
                { icon: CheckCircle2, text: 'Special event coordination' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 text-espresso shadow-2xl"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Reservation Confirmed!</h3>
                <p className="text-espresso/60 mb-8">We've sent a confirmation details to your email and phone.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-gold font-bold uppercase tracking-widest text-xs underline underline-offset-8"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-espresso/40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-cream/50 border-none rounded-xl px-4 py-4 text-espresso focus:ring-2 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-espresso/40">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full bg-cream/50 border-none rounded-xl px-4 py-4 text-espresso focus:ring-2 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-espresso/40">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/40" />
                      <select className="w-full bg-cream/50 border-none rounded-xl pl-12 pr-4 py-4 text-espresso focus:ring-2 focus:ring-gold outline-none appearance-none transition-all">
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>8+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-espresso/40">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/40" />
                      <input 
                        required
                        type="date" 
                        className="w-full bg-cream/50 border-none rounded-xl pl-12 pr-4 py-4 text-espresso focus:ring-2 focus:ring-gold outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-espresso/40">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/40" />
                      <select className="w-full bg-cream/50 border-none rounded-xl pl-12 pr-4 py-4 text-espresso focus:ring-2 focus:ring-gold outline-none appearance-none transition-all">
                        <option>09:00 AM</option>
                        <option>11:00 AM</option>
                        <option>01:00 PM</option>
                        <option>03:00 PM</option>
                        <option>05:00 PM</option>
                        <option>07:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-espresso/40">Special Requests</label>
                  <textarea 
                    placeholder="Birthday, allergies, or window seating preference..." 
                    className="w-full bg-cream/50 border-none rounded-xl px-4 py-4 text-espresso focus:ring-2 focus:ring-gold outline-none transition-all h-24 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-espresso text-cream font-bold py-5 rounded-2xl hover:bg-gold transition-all duration-300 uppercase tracking-[0.2em] text-sm shadow-xl"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
