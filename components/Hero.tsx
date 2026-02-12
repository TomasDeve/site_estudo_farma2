import React from 'react';
import { Button } from './Button';
import { Upload, Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 p-1 pl-1 pr-3 mb-8">
              <span className="flex items-center justify-center rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white mr-3">
                Novo
              </span>
              <span className="text-xs font-medium text-primary-900">
                Entrega expressa em até 2 horas na capital
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-secondary mb-6">
              Sua saúde não pode esperar, <span className="text-primary-600">nós entregamos.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Encontre medicamentos, vitaminas e cosméticos com os melhores preços. 
              Envie sua receita digital e receba tudo no conforto da sua casa com total segurança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-xl shadow-primary-500/20">
                Ver Ofertas do Dia
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Enviar Receita
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Farmacêutico Online
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Pagamento Seguro
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Rastreio em Tempo Real
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none">
             {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-2">
                <img 
                    src="https://picsum.photos/seed/doctor/800/800" 
                    alt="Farmacêutica sorrindo" 
                    loading="lazy"
                    className="rounded-2xl w-full object-cover h-[500px]"
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                             <Search className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Procurando algo específico?</p>
                            <p className="font-semibold text-gray-900">Busque por nome ou sintoma</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};