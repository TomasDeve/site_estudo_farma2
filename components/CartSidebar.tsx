import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { Button } from './Button';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity,
  onRemove
}) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition-transform duration-300 ease-in-out bg-white shadow-xl flex flex-col h-full animate-in slide-in-from-right">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Seu Carrinho
              <span className="bg-primary-100 text-primary-700 text-xs py-0.5 px-2 rounded-full">
                {totalItems} itens
              </span>
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Seu carrinho está vazio</h3>
                  <p className="text-gray-500 mt-1">Adicione produtos para começar a comprar.</p>
                </div>
                <Button variant="outline" onClick={onClose}>
                  Continuar comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-2 pr-4">{item.name}</h3>
                          <p className="ml-4">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 px-2 hover:bg-gray-50 text-gray-600 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-2 font-medium w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 px-2 hover:bg-gray-50 text-gray-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="font-medium text-red-500 hover:text-red-600"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>R$ {total.toFixed(2).replace('.', ',')}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-6">
                Frete e impostos calculados no checkout.
              </p>
              <Button fullWidth size="lg" className="flex items-center justify-between group">
                <span>Finalizar Compra</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};