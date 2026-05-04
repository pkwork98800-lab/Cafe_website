import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { OrderDrawer } from './components/OrderDrawer';
import { Footer } from './components/Footer';
import { MenuItem } from './components/MenuSection';

// Pages
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { MenuPage } from './pages/MenuPage';
import { ReservationsPage } from './pages/ReservationsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsOrderDrawerOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.item.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.item.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cream selection:bg-gold selection:text-espresso flex flex-col">
        <Navbar 
          onOrderClick={() => setIsOrderDrawerOpen(true)} 
          cartCount={cart.reduce((acc, curr) => acc + curr.quantity, 0)}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/menu" element={<MenuPage onAddToCart={addToCart} />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Routes>
        </main>

        <Footer />

        <OrderDrawer 
          isOpen={isOrderDrawerOpen} 
          onClose={() => setIsOrderDrawerOpen(false)}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      </div>
    </Router>
  );
};

export default App;
