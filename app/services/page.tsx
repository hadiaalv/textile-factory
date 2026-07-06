import React from 'react';

export default function Services() {
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Comprehensive textile services from material design and sampling to production, finishing, and logistics support.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Technical Development</h2>
          <p className="mt-3 text-sm text-gray-200">Custom fabric engineering, performance testing, and certification support for demanding applications.</p>
        </article>
        <article className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Manufacturing Support</h2>
          <p className="mt-3 text-sm text-gray-200">Integrated production planning, quality assurance, and supply chain coordination for reliable delivery.</p>
        </article>
      </div>
    </section>
  );
}
