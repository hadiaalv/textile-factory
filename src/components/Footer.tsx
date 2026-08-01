"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { CLIENTS } from '../data/clients';

export default function Footer(){
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-gold-500/20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="#home" className="inline-flex items-center rounded-3xl bg-white/10 p-3 ring-1 ring-white/10 transition hover:bg-white/15" aria-label="Awan Textile Mill home">
            <Image src="/images/logos/logo.png" alt="Awan Textile Mill logo" width={180} height={56} className="h-12 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">Premium home textiles crafted with comfort and quality in mind, from bedsheets to towels and baby cot sheets.</p>
          <div className="flex gap-3 mt-5 text-gold-400">
            <a href="#" aria-label="Facebook" className="hover:text-gold-200 transition-colors"><FiFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gold-200 transition-colors"><FiInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold-200 transition-colors"><FiLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gold-200 transition-colors"><FiTwitter /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold-400 tracking-wide">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="#about" className="hover:text-gold-200 transition-colors">About Us</Link></li>
            <li><Link href="#manufacturing" className="hover:text-gold-200 transition-colors">Manufacturing</Link></li>
            <li><Link href="#quality" className="hover:text-gold-200 transition-colors">Quality Assurance</Link></li>
            <li><Link href="#products" className="hover:text-gold-200 transition-colors">Our Products</Link></li>
            <li><Link href="#contact" className="hover:text-gold-200 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold-400 tracking-wide">Clients</h4>
          <div className="flex flex-wrap gap-3 mt-4">
            {CLIENTS.map(c=> (
              <img key={c.id} src={c.logo} alt={c.name} className="w-16 h-10 object-cover rounded-md border border-gold-500/15"/>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold-400 tracking-wide">Newsletter</h4>
          <p className="mt-4 text-sm text-gray-400">For general queries, reach us anytime.</p>
          <form className="mt-4 flex" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-l-md bg-white/5 border border-gold-500/20 text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold-400"/>
            <button className="px-4 py-2 rounded-r-md bg-gold-500 text-primary text-sm font-semibold hover:bg-gold-400 transition-colors">Join</button>
          </form>
        </div>
      </div>
      <div className="container text-center text-sm text-gray-500 mt-12 pt-6 border-t border-white/5">© {new Date().getFullYear()} Awan Textile Mill. All rights reserved.</div>
    </footer>
  )
}
