import React from 'react';

const UNITS = [
  { title: 'Weaving', text: 'A modern weaving unit combining shuttle-less looms, auto looms and power looms, run on A-grade yarn to construct qualities and widths to customer requirements.' },
  { title: 'Dyeing', text: 'Continuous bleach, jigger dyeing, reactive thermosol and vat dyeing under experienced supervision, keeping pace with the latest colors and fabrications.' },
  { title: 'Printing', text: 'Rotary machine printing up to 16 colors, plus bleached and plain-dyed processing in widths from 30in to 124in.' },
  { title: 'Stitching', text: 'Single-needle, multi-needle, overlock and quilting machines — over 200 units — with quality control from cutting through to packing.' },
  { title: 'Embroidery', text: 'Dedicated embroidery machines that bring an elevated, embroidered finish to select product lines.' },
  { title: 'Designing', text: 'An in-house design team focused on colour schemes and pattern development for every new collection.' }
];

export default function Manufacturing(){
  return (
    <section className="container py-20">
      <span className="section-kicker">State of the Art</span>
      <h1 className="mt-3 text-4xl font-bold">Manufacturing</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">State-of-the-art production lines with rigorous quality control and ISO-certified systems, covering every stage from yarn to finished product.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {UNITS.map((u) => (
          <div key={u.title} className="glass p-6 rounded-xl">
            <span className="text-gold-500 font-display text-2xl font-bold">0{UNITS.indexOf(u)+1}</span>
            <h3 className="mt-3 font-semibold text-lg">{u.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
