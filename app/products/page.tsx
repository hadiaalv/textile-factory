import React from 'react';
import ProductCard from '../../src/components/ProductCard';
import { PRODUCTS } from '../../src/data/products';

export default function Products(){
  return (
    <section className="container py-20">
      <span className="section-kicker">Complete Range</span>
      <h1 className="mt-3 text-4xl font-bold">Products</h1>
      <p className="mt-3 text-gray-600">Explore our collection of premium bedsheets, towels, and baby cot sheets made for comfort and everyday use.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
