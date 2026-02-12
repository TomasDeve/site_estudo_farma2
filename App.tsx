import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { products } from './data';
import { Product, CartItem } from './types';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className="pt-16">
        <Hero />
        
        <Features />

        {/* Categories / Products Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Destaques da Semana</h2>
              <p className="text-gray-500">Os produtos mais vendidos e recomendados pelos especialistas.</p>
            </div>
            <button className="text-primary-600 font-medium hover:text-primary-700 hover:underline">
              Ver todos os produtos
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-8 container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Baixe nosso App</h2>
                <p className="text-primary-100 text-lg mb-8">Ganhe 15% de desconto na primeira compra pelo aplicativo e tenha acesso a ofertas exclusivas.</p>
                <div className="flex gap-4">
                   <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      App Store
                   </button>
                   <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                      Google Play
                   </button>
                </div>
             </div>
             {/* Abstract circle decoration */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-20 -mb-20 w-60 h-60 bg-teal-400/20 rounded-full blur-2xl"></div>
          </div>
        </section>

      </main>

      <footer className="bg-secondary text-slate-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                 <div className="bg-primary-600 p-1.5 rounded-lg">
                    <div className="w-4 h-4 flex items-center justify-center font-bold italic text-xs">P</div>
                 </div>
                 <span className="text-xl font-bold tracking-tight">
                   Pharma<span className="text-primary-500">Life</span>
                 </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                Sua saúde é nossa prioridade. Oferecemos uma ampla gama de medicamentos e produtos de bem-estar com entrega rápida e segura.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Institucional</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Seja um Parceiro</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Ajuda</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary-500 transition-colors">Central de Atendimento</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Prazos e Entregas</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Como Comprar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Newsletter</h4>
              <p className="text-sm text-slate-400 mb-4">Receba ofertas exclusivas no seu e-mail.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg p-2 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} PharmaLife Farmácia LTDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;