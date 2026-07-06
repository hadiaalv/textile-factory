import React from 'react';
import Image from 'next/image';
import { PRODUCTS } from '../../../src/data/products';

type Props = { params: { slug: string } };

export default function ProductDetail({ params }: Props){
  const product = PRODUCTS.find(p=>p.slug === params.slug);
  if(!product) return <div className="container py-20">Product not found</div>;

  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 w-full rounded-xl overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <h4 className="mt-6 font-semibold">Specifications</h4>
          <ul className="mt-2 text-sm text-gray-700">
            {Object.entries(product.specs).map(([k,v])=> <li key={k}><strong>{k}:</strong> {v}</li>)}
          </ul>
          <h4 className="mt-6 font-semibold">Applications</h4>
          <div className="mt-2 flex gap-2 flex-wrap">
            {product.applications.map(a=> <span key={a} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
