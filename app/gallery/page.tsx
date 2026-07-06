import React from 'react';
import GalleryGrid from '../../src/components/GalleryGrid';
import { PRODUCTS } from '../../src/data/products';

export default function Gallery(){
  const images = PRODUCTS.map(p=>p.image).concat([PRODUCTS[0].image]);
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <p className="mt-3 text-gray-600">Masonry-style gallery of our production and finished products.</p>
      <div className="mt-8">
        <GalleryGrid images={images} />
      </div>
    </section>
  )
}
