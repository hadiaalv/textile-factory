import React from 'react';
import Link from 'next/link';
import Hero from '../src/components/Hero';
import ProductCard from '../src/components/ProductCard';
import { PRODUCTS } from '../src/data/products';
import AnimatedCounter from '../src/components/AnimatedCounter';
import ClientSlider from '../src/components/ClientSlider';
import GalleryGrid from '../src/components/GalleryGrid';

export default function Home(){
	return (
		<>
			<Hero />

			<section className="container py-16">
				<span className="section-kicker">Why Choose Us</span>
				<h2 className="mt-3 text-3xl font-semibold">Why Choose Awan Textile Mill</h2>
				<p className="mt-2 text-gray-600 max-w-2xl">Trusted craftsmanship, dependable quality, and a strong focus on comfortable home textile products.</p>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="glass p-6 rounded-xl">
						<h3 className="font-semibold">Precision Engineering</h3>
						<p className="text-sm text-gray-600 mt-2">Advanced looms, computerized quality inspection, and proprietary finishing processes.</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="font-semibold">Sustainable Supply</h3>
						<p className="text-sm text-gray-600 mt-2">Solar-powered operations, closed-loop water systems, and recycled materials program.</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="font-semibold">Global Reach</h3>
						<p className="text-sm text-gray-600 mt-2">Logistics integrations and export experience for time-critical deliveries.</p>
					</div>
				</div>
			</section>

			<section className="bg-primary py-16">
				<div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
					<AnimatedCounter end={25} label="Years of Experience" />
					<AnimatedCounter end={500} label="Employees" />
					<AnimatedCounter end={1500} label="Tons/Year Capacity" />
					<AnimatedCounter end={60} label="Export Countries" />
				</div>
			</section>

			<section className="container py-16">
				<span className="section-kicker">Complete Range</span>
				<h2 className="mt-3 text-3xl font-semibold">Product Categories</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
					{PRODUCTS.map(p=> <ProductCard key={p.id} product={p} />)}
				</div>
			</section>

			<section className="bg-white py-16 border-y border-gold-500/10">
				<div className="container text-center">
					<span className="section-kicker justify-center">State of the Art</span>
					<h2 className="mt-3 text-3xl font-semibold">Our Manufacturing Units</h2>
					<p className="mt-2 text-gray-600 max-w-2xl mx-auto">Weaving, dyeing, printing, stitching, embroidery and design — all under one roof, backed by ISO-certified quality control.</p>
					<Link href="/manufacturing" className="btn-primary inline-flex mt-6">See Manufacturing</Link>
				</div>
			</section>

			<section className="container py-16">
				<span className="section-kicker">Our Clients</span>
				<h2 className="mt-3 text-3xl font-semibold">Trusted Around the World</h2>
				<div className="mt-6">
					<ClientSlider />
				</div>
			</section>

			<section className="container py-16">
				<span className="section-kicker">Our Premises</span>
				<h2 className="mt-3 text-3xl font-semibold">Gallery</h2>
				<div className="mt-6">
					<GalleryGrid images={PRODUCTS.map(p=>p.image)} />
				</div>
			</section>
		</>
	)
}
