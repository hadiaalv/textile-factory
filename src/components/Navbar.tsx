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
    <header className={`fixed w-full z-50 top-0 transition-all ${scrolled ? 'backdrop-blur-md bg-primary/95 shadow-lg border-b border-white/10' : 'bg-primary/80 backdrop-blur-sm shadow-sm'}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="Awan Textile Mill home">
          <Image src="/images/logos/logo.png" alt="Awan Textile Mill logo" width={160} height={48} className="h-10 w-auto md:h-12" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-white">
          {LINKS.map(([label, href]) => (
            <Link key={label} href={href} className="hover:underline">{label}</Link>
          ))}
          <Link href="/contact" className="btn-primary">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="text-white text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="md:hidden">
            <div className="bg-primary/90 text-white p-6">
              <div className="flex flex-col gap-4">
                {LINKS.map(([label, href]) => (
                  <Link key={label} href={href} onClick={() => setOpen(false)} className="py-2">{label}</Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary">Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
