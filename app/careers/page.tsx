import React from 'react';

export default function Careers(){
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Careers</h1>
      <p className="mt-3 text-gray-600">Join a team of engineers, designers and operators committed to excellence and sustainability.</p>

      <div className="mt-8 space-y-6">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Open Positions</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-200">
            <li>Textile Process Engineer</li>
            <li>Quality Control Specialist</li>
            <li>Sales Manager — Technical Textiles</li>
          </ul>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Benefits</h3>
          <p className="text-sm text-gray-200 mt-2">Competitive salary, health benefits, professional development and relocation assistance for key roles.</p>
        </div>
      </div>
    </section>
  )
}
