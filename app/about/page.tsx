import React from 'react';

export default function About(){
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">About Elite Textile Factory</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Founded over two decades ago, Elite Textile Factory has grown into a global leader in engineered textiles. Our facilities combine advanced weaving and knitting technologies with sustainability-first practices to deliver fabrics that perform under the most demanding conditions.</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-sm text-gray-200 mt-2">To craft high-performance textiles that reduce environmental impact while elevating product quality.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-sm text-gray-200 mt-2">To be the world's most trusted textile partner for sustainable premium manufacturers.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Core Values</h3>
          <ul className="text-sm text-gray-200 mt-2 space-y-1">
            <li>Quality & Integrity</li>
            <li>Sustainability</li>
            <li>Innovation</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
