import React from 'react';
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
				<h2 className="text-3xl font-semibold">Why Choose Elite Textile</h2>
				<p className="mt-2 text-gray-600 max-w-2xl">Decades of engineering excellence, certified quality systems, and sustainable manufacturing.</p>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="glass p-6 rounded-xl">
						<h3 className="font-semibold">Precision Engineering</h3>
						<p className="text-sm text-gray-200 mt-2">Advanced looms, computerized quality inspection, and proprietary finishing processes.</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="font-semibold">Sustainable Supply</h3>
						<p className="text-sm text-gray-200 mt-2">Solar-powered operations, closed-loop water systems, and recycled materials program.</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="font-semibold">Global Reach</h3>
						<p className="text-sm text-gray-200 mt-2">Logistics integrations and export experience for time-critical deliveries.</p>
					</div>
				</div>
			</section>

			<section className="container py-16">
				<h2 className="text-3xl font-semibold">Product Categories</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
					{PRODUCTS.map(p=> <ProductCard key={p.id} product={p} />)}
				</div>
			</section>

			<section className="bg-white/80 py-16">
				<div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
					<AnimatedCounter end={120} label="Years collective experience" />
					<AnimatedCounter end={500} label="Employees" />
					<AnimatedCounter end={1500} label="Tons/year capacity" />
					<AnimatedCounter end={60} label="Export countries" />
				</div>
			</section>

			<section className="container py-16">
				<h2 className="text-3xl font-semibold">Clients</h2>
				<div className="mt-6">
					<ClientSlider />
				</div>
			</section>

			<section className="container py-16">
				<h2 className="text-3xl font-semibold">Gallery</h2>
				<GalleryGrid images={PRODUCTS.map(p=>p.image)} />
			</section>
		</>
	)
}
