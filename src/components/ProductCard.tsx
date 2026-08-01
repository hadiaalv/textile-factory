import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/index.d';

export default function ProductCard({product}:{product:Product}){
  return (
    <article className="bg-white rounded-xl border border-gold-500/15 shadow-sm overflow-hidden hover:shadow-lg hover:border-gold-500/40 transition-all">
      <div className="relative h-48 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-gray-500">{product.category}</span>
          <Link href={`/products/${product.slug}`} className="text-accent font-semibold hover:text-gold-600">View →</Link>
        </div>
      </div>
    </article>
  )
}
