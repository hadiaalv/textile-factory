import { NextResponse } from 'next/server';
import { PRODUCTS } from '../../src/data/products';

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const pages = ['/', '/about', '/products', '/gallery', '/manufacturing', '/certifications', '/sustainability', '/careers', '/contact'];

  const urls = pages.map(p=>`${base}${p}`).concat(PRODUCTS.map(p=>`${base}/products/${p.slug}`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u=>`<url><loc>${u}</loc></url>`).join('\n')}
  </urlset>`;
  return new NextResponse(body, { headers: { 'Content-Type': 'application/xml' } });
}
