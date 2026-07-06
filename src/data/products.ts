import type { Product } from '../types/index.d';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'premium-cotton-yarn',
    name: 'Premium Cotton Yarn',
    category: 'Yarns',
    description: 'Long-staple cotton yarn spun for strength and softness, ideal for premium apparel and home textiles.',
    applications: ['Apparel', 'Home Textiles', 'Medical Textiles'],
    specs: { count: '30s', tensile: '28 cN/tex', moisture: '8%' },
    image: 'https://images.unsplash.com/photo-1520975916363-2a5d2a2f7b2b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'
  },
  {
    id: 'p2',
    slug: 'industrial-polyester-fabric',
    name: 'Industrial Polyester Fabric',
    category: 'Fabrics',
    description: 'High-tenacity polyester woven fabric engineered for durability and color fastness in industrial applications.',
    applications: ['Workwear', 'Upholstery', 'Outdoor Gear'],
    specs: { weight: '320gsm', weave: 'Twill', finish: 'PU coating' },
    image: 'https://images.unsplash.com/photo-1619710907833-b3bd1a2ff0b8?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'
  },
  {
    id: 'p3',
    slug: 'sustainable-blend-knit',
    name: 'Sustainable Blend Knit',
    category: 'Knits',
    description: 'Eco-conscious blended knit using recycled polyester and organic cotton for soft hand and reduced footprint.',
    applications: ['Activewear', 'Casual Wear'],
    specs: { composition: '60% recycled PET / 40% organic cotton', weight: '220gsm' },
    image: 'https://images.unsplash.com/photo-1520975916363-2a5d2a2f7b2b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'
  }
];
