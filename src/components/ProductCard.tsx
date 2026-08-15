import Image from 'next/image';
import { Product } from '../types/index.d';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.14)]">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-[0.28em] text-[#b5781e]">{product.category}</span>
        <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
        <div className="mt-5 flex items-center justify-between text-sm font-medium text-slate-700">
          <span>Premium finish</span>
          <span className="text-[#b5781e] transition-transform group-hover:translate-x-1">View details →</span>
        </div>
      </div>
    </article>
  );
}
