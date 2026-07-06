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
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'
  },
  {
    id: 'p2',
    slug: 'luxury-towels',
    name: 'Luxury Towels',
    category: 'Towels',
    description: 'Absorbent, plush towels made for everyday comfort and long-lasting softness.',
    applications: ['Households', 'Spas', 'Hospitals'],
    specs: { fabric: 'Cotton terry', gsm: '500', size: 'Hand/Bath/Beach' },
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'
  },
  {
    id: 'p3',
    slug: 'baby-cot-sheets',
    name: 'Baby Cot Sheets',
    category: 'Baby Linens',
    description: 'Gentle baby cot sheets designed for safe comfort, easy care, and neat finishing.',
    applications: ['Nurseries', 'Baby Stores', 'Hotels'],
    specs: { fabric: 'Soft cotton', size: 'Standard cot', care: 'Machine washable' },
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'
  }
];
