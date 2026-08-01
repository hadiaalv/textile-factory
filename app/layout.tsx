import './globals.css';
import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ClientProviders from '../src/components/ClientProviders';

export const metadata = {
	title: 'Awan Textile Mill',
	description: 'Awan Textile Mill specializes in premium bedsheets, towels, and baby cot sheets with quality craftsmanship and dependable service.'
};

export default function RootLayout({ children }: { children: React.ReactNode }){
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<ClientProviders>
					<Navbar />
					<main className="pt-20">{children}</main>
					<Footer />
				</ClientProviders>
			</body>
		</html>
	);
}
