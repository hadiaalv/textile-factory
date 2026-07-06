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
