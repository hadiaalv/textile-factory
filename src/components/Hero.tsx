"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

export default function Hero(){
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400 rounded-full opacity-5 blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgb(212, 175, 55)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="section-kicker !text-gold-300 text-sm sm:text-base">Faisalabad, Pakistan</span>
            
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Awan Textile <span className="text-gold-400">Mill</span>
              <br className="block" />
              <span className="bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">
                Comfort Woven
              </span>
              <br className="block" />
              <span className="text-white">into Every Thread</span>
            </h1>
            
            <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We manufacture premium bedsheets, towels, and baby cot sheets with a focus on 
              <span className="text-gold-400 font-semibold"> softness, durability, and careful finishing</span>.
            </p>
            
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
              <Link href="/products" className="w-full sm:w-auto">
                <Button>Explore Products</Button>
              </Link>
              <Link href="/manufacturing" className="w-full sm:w-auto">
                <Button variant="ghost">Our Manufacturing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gold-400 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [2, 6, 2] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-gold-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
