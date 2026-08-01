import React from 'react';

export default function Contact(){
  return (
    <section className="container py-20">
      <span className="section-kicker">Get in Touch</span>
      <h1 className="mt-3 text-4xl font-bold">Contact Us</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">Get in touch for sample requests, technical questions, or partnerships.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4 glass p-6 rounded-xl">
          <input placeholder="Full name" className="w-full p-3 rounded-md border border-gold-500/20 focus:outline-none focus:border-gold-400" />
          <input placeholder="Email" className="w-full p-3 rounded-md border border-gold-500/20 focus:outline-none focus:border-gold-400" />
          <input placeholder="Company" className="w-full p-3 rounded-md border border-gold-500/20 focus:outline-none focus:border-gold-400" />
          <textarea placeholder="Message" className="w-full p-3 rounded-md border border-gold-500/20 h-32 focus:outline-none focus:border-gold-400" />
          <button className="btn-primary">Send Message</button>
        </form>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="font-display font-semibold">Our Office</h3>
            <p className="text-sm text-gray-600 mt-2">Main Boulevard, Industrial Estate, Faisalabad, Pakistan</p>
            <p className="text-sm text-gray-600 mt-2">Phone: +92 (41) 8586-177</p>
            <p className="text-sm text-gray-600 mt-1">Email: sales@awantextile.com</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gold-500/15 h-64">
            <iframe
              title="Awan Textile Mill location"
              src="https://www.google.com/maps?q=Faisalabad,Pakistan&output=embed"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
