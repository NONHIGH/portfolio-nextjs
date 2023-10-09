import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Angel Luis 😎',
	description:
		'Este es mi portfolio creado en Next Js 13, hare otro con Angular',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<head>
				<link rel='icon' href='/public/logo.jpeg' type='image' />
			</head>
			<body className={inter.className}>
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
}
