"use client";
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiChevronUp, FiCpu, FiGlobe, FiMail, FiMapPin, FiPhone, FiShield, FiStar } from 'react-icons/fi';
import ProductCard from '../src/components/ProductCard';
import GalleryGrid from '../src/components/GalleryGrid';
import { PRODUCTS } from '../src/data/products';

const highlights = [
  'Premium, breathable textiles crafted for homes, hotels and institutions.',
  'Responsible manufacturing backed by certifications and rigorous checks.',
  'Flexible production with reliable delivery and a premium client experience.'
];

const manufacturingFeatures = [
  { icon: FiCpu, title: 'Integrated production', text: 'Spinning, weaving, dyeing and finishing run in one ecosystem for consistent quality.' },
  { icon: FiShield, title: 'Certified controls', text: 'Every stage is monitored with documented standards and quality assurance checkpoints.' },
  { icon: FiGlobe, title: 'Global readiness', text: 'Export-focused operations and responsive logistics support delivery across markets.' }
];

const assurancePoints = [
  { icon: FiAward, title: 'ISO-aligned quality', text: 'Rigorous testing and documentation support every shipment.' },
  { icon: FiCheckCircle, title: 'Material integrity', text: 'Careful sourcing and inspection preserve fabric quality from start to finish.' },
  { icon: FiStar, title: 'Detail-led finishing', text: 'Precision finishing gives each product a refined, durable feel.' }
];

const premiseImages = [
  '/images/Quilt1.webp',
  '/images/Cushion1.webp',
  '/images/babytowel.webp',
  '/images/duvet cover.webp',
  '/images/towel1.jpeg',
  '/images/towel2.jpeg'
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
      setShowBackToTop(window.scrollY > 700);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = useMemo(() => [
    { value: '25+', label: 'years of expertise' },
    { value: '500+', label: 'craft professionals' },
    { value: '1.5k', label: 'tons yearly capacity' },
    { value: '60', label: 'export markets' }
  ], []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => setIsSubmitting(false), 1200);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-[#d1a44a] via-[#c4983f] to-[#f2d79d]" style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left' }} />

      <section id="home" data-section="home" className="relative isolate overflow-hidden bg-[#0f0f0f]">
        <Image src="/images/towel1.jpeg" alt="Premium textile products" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,152,63,0.24),transparent_45%),linear-gradient(120deg,rgba(8,8,8,0.95),rgba(20,20,20,0.72))]" />
        <div className="container relative z-10 grid min-h-screen items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
            <span className="section-kicker !text-[#f3d28d]">Woven in Faisalabad, Pakistan</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Premium textile craftsmanship for modern living.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Awan Textile Mill blends heritage skills and contemporary design to create luxurious bedsheets, towels and baby essentials with lasting comfort.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#products" className="btn-primary">Explore Products</Link>
              <Link href="#contact" className="btn-ghost">Request a Quote</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="glass rounded-[2rem] border border-white/10 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 text-[#f3d28d]">
              <FiStar className="text-xl" />
              <span className="text-sm uppercase tracking-[0.3em]">Why clients choose us</span>
            </div>
            <ul className="mt-6 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-gray-200">
                  <FiCheckCircle className="mt-1 shrink-0 text-[#f3d28d]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="about" data-section="about" className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <span className="section-kicker">About Us</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A modern textile partner with timeless quality.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Our story is rooted in craftsmanship and driven by innovation. From raw material to final finish, every detail is handled with care so our clients receive textiles that feel elevated and perform beautifully.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e8d6a7] bg-[#fcf7eb] p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Mission</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">To deliver premium, responsibly made textiles that bring comfort, elegance and confidence to everyday living.</p>
              </div>
              <div className="rounded-2xl border border-[#e8d6a7] bg-[#fcf7eb] p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Vision</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">To be a globally trusted textile brand known for quality, innovation and enduring customer relationships.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
                <div className="text-3xl font-semibold text-[#b5781e]">{item.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="manufacturing" data-section="manufacturing" className="section-shell bg-[#f8f4ea]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="section-kicker">Manufacturing</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A seamless production journey from fiber to finish.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">We combine modern machinery with artisan-level care to deliver consistent quality across every order.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {manufacturingFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }} className="glass rounded-[1.6rem] p-7">
                  <div className="inline-flex rounded-2xl bg-[#f5e8c8] p-3 text-[#b5781e]">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" data-section="products" className="section-shell">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-kicker">Our Products</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Signature collections designed for comfort and longevity.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">Browse our premium categories — each crafted to meet a balance of softness, durability and style.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="premises" data-section="premises" className="section-shell bg-[#fbf7ef]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="section-kicker">Our Premises</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A refined working environment that supports careful execution.</h2>
          </motion.div>
          <div className="mt-10">
            <GalleryGrid images={premiseImages} />
          </div>
        </div>
      </section>

      <section id="quality" data-section="quality" className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <span className="section-kicker">Quality Assurance</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Every product is inspected, documented and delivered with confidence.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Our practice combines modern testing methods with accountable process control so quality is visible at every stage of production.</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {assurancePoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]">
                  <div className="inline-flex rounded-2xl bg-[#f5e8c8] p-3 text-[#b5781e]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" data-section="contact" className="section-shell bg-[#101010] text-white">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <span className="section-kicker !text-[#f3d28d]">Contact Us</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s discuss your next textile requirement.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">Whether you need bulk production, bespoke finishes or a trusted partner for recurring orders, we’re ready to respond with professionalism.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiMapPin className="mt-1 text-[#f3d28d]" />
                <span className="text-sm leading-7 text-slate-300">Faisalabad, Pakistan</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiPhone className="mt-1 text-[#f3d28d]" />
                <span className="text-sm leading-7 text-slate-300">+92 300 0000000</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiMail className="mt-1 text-[#f3d28d]" />
                <span className="text-sm leading-7 text-slate-300">info@awantextilemill.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Your name" />
                <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Work email" type="email" />
              </div>
              <input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Company" />
              <textarea rows={4} className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Tell us about your requirements" />
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center disabled:opacity-80">
                {isSubmitting ? 'Sending request…' : 'Send inquiry'}
              </button>
            </form>

            <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-white/10">
              <iframe
                title="Awan Textile Mill location"
                src="https://www.google.com/maps?q=Faisalabad%20Pakistan&z=12&output=embed"
                className="h-48 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#b5781e] p-3 text-white shadow-lg transition-all ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        <FiChevronUp className="text-xl" />
      </button>
    </>
  );
}
