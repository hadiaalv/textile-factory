import React from 'react';

export default function Manufacturing(){
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Manufacturing</h1>
      <p className="mt-3 text-gray-600">State-of-the-art production lines with rigorous quality control and ISO-certified systems.</p>

      <div className="mt-8 space-y-6">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Yarn Preparation</h3>
          <p className="text-sm text-gray-200 mt-2">Automated blending, carding and spinning for consistent yarn quality.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Weaving & Knitting</h3>
          <p className="text-sm text-gray-200 mt-2">Flexible production cells for woven and knit constructions with quick changeovers.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Finishing & Inspection</h3>
          <p className="text-sm text-gray-200 mt-2">Advanced finishing treatments and inline optical inspection for defect-free roll delivery.</p>
        </div>
      </div>
    </section>
  )
}
