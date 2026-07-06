import React from 'react';

export default function Blogs() {
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Industry Insights</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Explore expert analysis on textile innovation, sustainability, and supply chain excellence.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Smart Textiles for Modern Manufacturing</h2>
          <p className="mt-3 text-sm text-gray-200">Discover how sensors and data-driven fabric technologies are shaping next-generation products.</p>
        </article>
        <article className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Closing the Loop with Circular Textiles</h2>
          <p className="mt-3 text-sm text-gray-200">Our strategies for reducing waste, recycling fibers, and scaling responsible production.</p>
        </article>
      </div>
    </section>
  );
}
