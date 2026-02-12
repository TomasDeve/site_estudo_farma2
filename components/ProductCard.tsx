import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary-500/30">
          {product.badge}
        </span>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 duration-300">
        <Heart className="w-5 h-5" />
      </button>

      {/* Image Container */}
      <div className="aspect-square bg-gray-50 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick Add Overlay Mobile */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent md:hidden">
            <p className="text-white text-xs font-medium">{product.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-xs font-medium text-primary-600 mb-1">{product.category}</p>
        <h3 className="text-gray-900 font-semibold text-lg leading-tight mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through block mb-0.5">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="text-xl font-bold text-gray-900">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          <Button 
            size="sm" 
            onClick={() => onAddToCart(product)}
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center md:w-auto md:h-10 md:px-4 md:rounded-lg"
          >
            <ShoppingCart className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Adicionar</span>
          </Button>
        </div>
      </div>
    </div>
  );
};