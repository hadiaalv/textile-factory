import React from 'react';

export default function Certifications(){
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Certifications & Awards</h1>
      <p className="mt-3 text-gray-600">We maintain ISO 9001, ISO 14001, OEKO-TEX standard 100 and third-party audits across our facilities.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl">
          <h4 className="font-semibold">ISO 9001</h4>
          <p className="text-sm text-gray-200 mt-2">Quality management systems for manufacturing and supply chain.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h4 className="font-semibold">OEKO-TEX</h4>
          <p className="text-sm text-gray-200 mt-2">Certified safe textiles for consumer use.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h4 className="font-semibold">Sustainability Awards</h4>
          <p className="text-sm text-gray-200 mt-2">Recognized for our closed-loop water systems and energy efficiency.</p>
        </div>
      </div>
    </section>
  )
}
