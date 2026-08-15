"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center hero-mask">
      <Image
        src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=7"
        fill
        alt="textile hero"
        sizes="100vw"
        className="object-cover opacity-50"
        priority
      />
      <div className="container relative z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <span className="section-kicker !text-gold-300">Woven in Faisalabad, Pakistan</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight">
            Awan Textile Mill <span className="text-gold-400">—</span><br className="hidden md:block"/> Comfort Woven into Every Thread
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">We manufacture premium bedsheets, towels, and baby cot sheets with a focus on softness, durability, and careful finishing.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products"><Button>Explore Products</Button></Link>
            <Link href="/manufacturing"><Button variant="ghost">Our Manufacturing</Button></Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="scroll-indicator">
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1" />
        </div>
      </div>
    </section>
  )
}
