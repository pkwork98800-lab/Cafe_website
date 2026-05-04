import React from 'react';
import { MenuSection, MenuItem } from '../components/MenuSection';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
  return (
    <div className="pt-24">
      <MenuSection onAddToCart={onAddToCart} />
    </div>
  );
};
