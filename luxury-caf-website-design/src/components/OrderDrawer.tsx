import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MenuItem } from './MenuSection';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { item: MenuItem; quantity: number }[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove
}) => {
  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-mocha/10 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-espresso" />
                <h2 className="text-xl font-serif font-bold text-espresso">Your Order</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-cream rounded-full transition-colors">
                <X className="w-6 h-6 text-espresso" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-mocha/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-mocha/20" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-espresso">Your cart is empty</h3>
                    <p className="text-espresso/40 text-sm">Add some delicious treats to get started.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-gold font-bold uppercase tracking-widest text-xs border-b border-gold pb-1"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map(({ item, quantity }) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif font-bold text-espresso leading-tight">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-espresso/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-espresso/40 text-[10px] uppercase tracking-wider mb-3">{item.category}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center bg-white border border-mocha/10 rounded-lg p-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-espresso">₹{item.price * quantity}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-mocha/10 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-espresso/60">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-espresso/60">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif font-bold text-espresso pt-2 border-t border-mocha/5">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">
                    <CheckCircle2 className="w-3 h-3" /> 
                    <span>Add a pastry for ₹50</span>
                  </div>
                  <button className="w-full bg-espresso text-cream font-bold py-5 rounded-2xl hover:bg-gold transition-all duration-300 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3">
                    Checkout Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

