import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelTrucks | Premium Campervan & RV Rental',
  description:
    'Explore the world with comfort. TravelTrucks offers a wide range of modern campervans and motorhomes for your perfect road trip. Book your home on wheels today.',
  keywords: [
    'campervan rental',
    'RV hire',
    'motorhome rental',
    'TravelTrucks',
    'road trip rentals',
    'rent a camper',
  ],
  openGraph: {
    title: 'TravelTrucks — Your Home Wherever You Park It',
    description:
      'Find the perfect camper for your next adventure. Easy booking, fully equipped vehicles, and total freedom of travel.',
    url: `${process.env.NEXT_PUBLIC_my_URL}`,
    siteName: 'TravelTrucks',
    images: [
      {
        url: '/travel-trucks-camper-rental.jpg',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks campervans in the wild',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TravelTrucks | Premium Campervan Rental',
    description:
      'Travel freely with TravelTrucks. The best deals on modern motorhome rentals.',
    images: ['/travel-trucks-camper-rental.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
