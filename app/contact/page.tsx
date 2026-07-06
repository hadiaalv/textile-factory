import React from 'react';

export default function Contact(){
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-3 text-gray-600">Get in touch for sample requests, technical questions, or partnerships.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-4">
          <input placeholder="Full name" className="w-full p-3 rounded-md border" />
          <input placeholder="Email" className="w-full p-3 rounded-md border" />
          <input placeholder="Company" className="w-full p-3 rounded-md border" />
          <textarea placeholder="Message" className="w-full p-3 rounded-md border h-32" />
          <button className="btn-primary">Send Message</button>
        </form>

        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold">Our Office</h3>
          <p className="text-sm text-gray-200 mt-2">123 Manufacturing Way, Industrial Park, City, Country</p>
          <p className="text-sm text-gray-200 mt-2">Phone: +1 (555) 123-4567</p>
          <p className="text-sm text-gray-200 mt-2">Email: sales@elitetextile.com</p>
        </div>
      </div>
    </section>
  )
}
