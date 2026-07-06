import './globals.css';
import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ClientProviders from '../src/components/ClientProviders';

export const metadata = {
	title: 'Elite Textile Factory',
	description: 'Premium textile manufacturing — sustainable, precise, industrial-scale solutions.'
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
