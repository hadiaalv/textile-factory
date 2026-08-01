import type { Product } from '../types/index.d';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'premium-bedsheets',
    name: 'Premium Bedsheets',
    category: 'Bedsheets',
    description: 'Soft, breathable bedsheets crafted for comfort, durability, and a refined finish in homes and hotels.',
    applications: ['Homes', 'Hotels', 'Hospitals'],
    specs: { fabric: '100% cotton', gsm: '180-220', size: 'Single/Double/King' },
    image: '/images/duvet cover.webp'
  },
  {
    id: 'p2',
    slug: 'luxury-towels',
    name: 'Luxury Towels',
    category: 'Towels',
    description: 'Absorbent, plush towels made for everyday comfort and long-lasting softness.',
    applications: ['Households', 'Spas', 'Hospitals'],
    specs: { fabric: 'Cotton terry', gsm: '500', size: 'Hand/Bath/Beach' },
    image: '/images/towel1.jpeg'
  },
  {
    id: 'p3',
    slug: 'baby-cot-sheets',
    name: 'Baby Cot Sheets',
    category: 'Baby Linens',
    description: 'Gentle baby cot sheets designed for safe comfort, easy care, and neat finishing.',
    applications: ['Nurseries', 'Baby Stores', 'Hotels'],
    specs: { fabric: 'Soft cotton', size: 'Standard cot', care: 'Machine washable' },
    image: '/images/babytowel.webp'
  }
];
