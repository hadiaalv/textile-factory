import React from 'react';

export default function Quote() {
  return (
    <section className="container py-20">
      <span className="section-kicker">Let's Talk</span>
      <h1 className="mt-3 text-4xl font-bold">Request a Custom Quote</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Tell us about your project and receive a tailored estimate for premium textile manufacturing.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Project Details</h2>
          <p className="mt-3 text-sm text-gray-600">Submit your material requirements, delivery schedule, and quality targets for a fast response.</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Strategic Support</h2>
          <p className="mt-3 text-sm text-gray-600">Our team collaborates with brand and product teams to align textile performance with commercial goals.</p>
        </div>
      </div>
    </section>
  );
}
