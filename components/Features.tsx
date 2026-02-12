import React from 'react';
import { Truck, ShieldCheck, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary-600" />,
    title: "Entrega Expressa",
    description: "Receba em até 2h na capital ou Frete Grátis Brasil acima de R$150."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
    title: "Garantia de Qualidade",
    description: "Todos os produtos são certificados e armazenados corretamente."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-primary-600" />,
    title: "Pagamento Facilitado",
    description: "Parcele em até 6x sem juros ou ganhe 5% OFF no PIX."
  },
  {
    icon: <Truck className="w-8 h-8 text-primary-600" />,
    title: "Rastreio em Tempo Real",
    description: "Acompanhe cada passo do seu pedido até a sua porta."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-primary-50 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};