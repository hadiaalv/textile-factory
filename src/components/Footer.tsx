import Link from 'next/link';
import Image from 'next/image';
import { CLIENTS } from '../data/clients';

export default function Footer(){
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="Awan Textile Mill home">
            <Image src="/images/logos/logo.png" alt="Awan Textile Mill logo" width={180} height={56} className="h-12 w-auto" priority />
          </Link>
          <p className="mt-2 text-sm text-gray-200">Premium home textiles crafted with comfort and quality in mind, from bedsheets to towels and baby cot sheets.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-200">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/manufacturing">Manufacturing</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Clients</h4>
          <div className="flex gap-3 mt-3">
            {CLIENTS.map(c=> (
              <img key={c.id} src={c.logo} alt={c.name} className="w-16 h-10 object-cover rounded-md bg-white/5"/>
            ))}
          </div>
        </div>
      </div>
      <div className="container text-center text-sm text-gray-400 mt-8">© {new Date().getFullYear()} Awan Textile Mill. All rights reserved.</div>
    </footer>
  )
}
