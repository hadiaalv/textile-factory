"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Manufacturing', '#manufacturing'],
  ['Our Products', '#products'],
  ['Our Premises', '#premises'],
  ['Quality Assurance', '#quality'],
  ['Contact Us', '#contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = LINKS.map(([, href]) => href.slice(1));
      const visibleSection = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom > 140;
      });
      if (visibleSection) setActiveSection(visibleSection);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 transition-all ${scrolled ? 'bg-[#0f0f0f]/90 shadow-lg backdrop-blur-md' : 'bg-[#0f0f0f]/70 backdrop-blur-sm'}`}>
      <div className="container flex items-center justify-between py-3">
        <Link href="#home" className="flex items-center rounded-full bg-transparent p-1" aria-label="Awan Textile Mill home" onClick={() => setOpen(false)}>
          <Image src="/images/logos/logo.png" alt="Awan Textile Mill logo" width={180} height={56} className="h-11 w-auto object-contain md:h-12" priority />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-100 lg:flex">
          {LINKS.map(([label, href]) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <Link key={label} href={href} className={`nav-link transition-colors ${isActive ? 'text-[#f3d28d]' : 'text-slate-100 hover:text-[#f3d28d]'}`}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="lg:hidden">
          <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="rounded-full border border-white/10 p-2 text-xl text-[#f3d28d]">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="lg:hidden">
            <div className="border-t border-white/10 bg-[#0f0f0f]/95 p-6 text-white">
              <div className="flex flex-col gap-4">
                {LINKS.map(([label, href]) => (
                  <Link key={label} href={href} onClick={() => setOpen(false)} className="py-1 text-sm text-slate-200 transition-colors hover:text-[#f3d28d]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
