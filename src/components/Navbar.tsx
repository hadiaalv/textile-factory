"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Products', '/products'],
  ['Manufacturing', '/manufacturing'],
  ['Gallery', '/gallery'],
  ['Certifications', '/certifications'],
  ['Sustainability', '/sustainability'],
  ['Careers', '/careers'],
  ['Contact', '/contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 top-0 transition-all ${scrolled ? 'backdrop-blur-md bg-primary/95 shadow-lg border-b border-gold-500/20' : 'bg-primary/85 backdrop-blur-sm'}`}>
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center" aria-label="Awan Textile Mill home">
          <Image src="/images/logos/logo.png" alt="Awan Textile Mill logo" width={160} height={48} className="h-11 w-auto md:h-12" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-100">
          {LINKS.map(([label, href]) => (
            <Link key={label} href={href} className="nav-link hover:text-gold-300 transition-colors">{label}</Link>
          ))}
          <Link href="/quote" className="btn-primary text-sm !py-2.5 !px-5">Get a Quote</Link>
        </nav>

        <div className="lg:hidden">
          <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="text-gold-400 text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="lg:hidden">
            <div className="bg-primary/98 border-t border-gold-500/15 text-white p-6">
              <div className="flex flex-col gap-4">
                {LINKS.map(([label, href]) => (
                  <Link key={label} href={href} onClick={() => setOpen(false)} className="py-1 hover:text-gold-300 transition-colors">{label}</Link>
                ))}
                <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary justify-center">Get a Quote</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
