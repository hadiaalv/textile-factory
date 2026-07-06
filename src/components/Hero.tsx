"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center hero-mask">
      <Image src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=7" fill alt="textile hero" className="object-cover opacity-60"/>
      <div className="container relative z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Awan Textile Mill — Comfort Woven into Every Thread</h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl">We manufacture premium bedsheets, towels, and baby cot sheets with a focus on softness, durability, and careful finishing.</p>
          <div className="mt-8 flex gap-4">
            <Button>Explore Products</Button>
            <Button variant="ghost">Our Manufacturing</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
