import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Vitamina C Complex 1000mg",
    price: 49.90,
    originalPrice: 65.00,
    category: "Vitaminas",
    image: "https://picsum.photos/seed/vita/400/400",
    badge: "Oferta",
    description: "Imunidade reforçada com absorção prolongada."
  },
  {
    id: 2,
    name: "Protetor Solar FPS 70",
    price: 89.90,
    category: "Cuidados Pessoais",
    image: "https://picsum.photos/seed/sun/400/400",
    description: "Alta proteção contra raios UVA/UVB, toque seco."
  },
  {
    id: 3,
    name: "Multivitamínico A-Z",
    price: 35.50,
    category: "Vitaminas",
    image: "https://picsum.photos/seed/multi/400/400",
    badge: "Mais Vendido",
    description: "Energia e disposição para o seu dia a dia."
  },
  {
    id: 4,
    name: "Creme Hidratante Facial",
    price: 120.00,
    originalPrice: 150.00,
    category: "Dermocosméticos",
    image: "https://picsum.photos/seed/face/400/400",
    description: "Hidratação profunda com ácido hialurônico."
  },
  {
    id: 5,
    name: "Ômega 3 Premium",
    price: 75.00,
    category: "Suplementos",
    image: "https://picsum.photos/seed/omega/400/400",
    description: "Saúde cardiovascular e cerebral."
  },
  {
    id: 6,
    name: "Shampoo Antiqueda",
    price: 45.90,
    category: "Cabelos",
    image: "https://picsum.photos/seed/shampoo/400/400",
    description: "Fortalece os fios desde a raiz."
  },
  {
    id: 7,
    name: "Colágeno Hidrolisado",
    price: 99.90,
    originalPrice: 130.00,
    category: "Suplementos",
    image: "https://picsum.photos/seed/colageno/400/400",
    badge: "Promoção",
    description: "Pele firme e unhas fortes."
  },
  {
    id: 8,
    name: "Kit Primeiros Socorros",
    price: 55.00,
    category: "Saúde",
    image: "https://picsum.photos/seed/kit/400/400",
    description: "Tudo o que você precisa para emergências domésticas."
  }
];