import React from 'react';

export default function About(){
  return (
    <section className="container py-20">
      <span className="section-kicker">Our Story</span>
      <h1 className="mt-3 text-4xl font-bold">About Awan Textile Mill</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Awan Textile Mill is a trusted manufacturer of premium home textiles, specializing in bedsheets, towels, and baby cot sheets. We focus on comfort, durability, and clean finishing to deliver products that meet everyday needs with confidence.</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-sm text-gray-600 mt-2">To create comfortable, high-quality textile products that bring value to homes, hotels, and families.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-sm text-gray-600 mt-2">To become a dependable name in premium bedsheets, towels, and baby cot sheets across the market.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Core Values</h3>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>Quality & Integrity</li>
            <li>Comfort & Care</li>
            <li>Reliable Service</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
