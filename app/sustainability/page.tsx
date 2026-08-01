import React from 'react';

export default function Sustainability(){
  return (
    <section className="container py-20">
      <span className="section-kicker">Responsible Manufacturing</span>
      <h1 className="mt-3 text-4xl font-bold">Sustainability</h1>
      <p className="mt-3 text-gray-600">Our long-term commitment to reduce footprint through renewable energy, water recycling and waste reduction.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl">
          <h4 className="font-semibold">Solar Energy</h4>
          <p className="text-sm text-gray-600 mt-2">On-site solar arrays provide a significant portion of plant energy needs.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h4 className="font-semibold">Water Recycling</h4>
          <p className="text-sm text-gray-600 mt-2">Closed-loop processing recovers and reuses process water.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h4 className="font-semibold">Waste Management</h4>
          <p className="text-sm text-gray-600 mt-2">Diversion programs ensure minimal landfill impact and material recovery.</p>
        </div>
      </div>
    </section>
  )
}
