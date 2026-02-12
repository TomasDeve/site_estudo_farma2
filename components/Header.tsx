import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User, Phone } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-primary-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium text-primary-900">
          <p>Frete Grátis para compras acima de R$ 150,00</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Central de Ajuda</span>
            <span className="hover:underline cursor-pointer">Nossas Lojas</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
             <div className="bg-primary-600 p-2 rounded-lg text-white">
                <div className="w-5 h-5 flex items-center justify-center font-bold italic">P</div>
             </div>
             <span className="text-xl font-bold text-secondary tracking-tight">
               Pharma<span className="text-primary-600">Life</span>
             </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex max-w-md w-full relative group">
            <input 
              type="text" 
              placeholder="O que você precisa hoje?" 
              className="w-full h-11 pl-11 pr-4 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all text-sm outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="hidden md:flex flex-col items-center justify-center text-gray-500 hover:text-primary-600 transition-colors gap-1 text-xs font-medium">
                <Phone className="w-6 h-6" />
                <span>Televendas</span>
            </button>
            
            <button className="hidden md:flex flex-col items-center justify-center text-gray-500 hover:text-primary-600 transition-colors gap-1 text-xs font-medium">
                <User className="w-6 h-6" />
                <span>Minha Conta</span>
            </button>

            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

            <button 
              onClick={onOpenCart}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <ShoppingBag className="w-6 h-6 text-secondary group-hover:text-primary-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white transform scale-100 transition-transform">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg animate-in slide-in-from-top-5">
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Buscar produtos..." 
                className="w-full h-11 pl-11 pr-4 rounded-lg bg-gray-100 border-none text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            <div className="space-y-2">
                <Button variant="ghost" fullWidth className="justify-start">Minha Conta</Button>
                <Button variant="ghost" fullWidth className="justify-start">Meus Pedidos</Button>
                <Button variant="ghost" fullWidth className="justify-start">Ofertas do Dia</Button>
                <div className="h-px bg-gray-100 my-2"></div>
                <Button variant="primary" fullWidth>Enviar Receita</Button>
            </div>
        </div>
      )}
    </header>
  );
};