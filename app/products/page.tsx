import React from 'react';
import ProductCard from '../../src/components/ProductCard';
import { PRODUCTS } from '../../src/data/products';

export default function Products(){
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Products</h1>
      <p className="mt-3 text-gray-600">Explore our catalog of engineered yarns, fabrics, and knit constructions.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
