import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { GoogleTagManager } from '@next/third-parties/google';
export const metadata: Metadata = {
  title: 'CRC Maesta: Luxury Apartments with Modern Amenities in Noida.',
  description:
    'CRC Maesta is offering premium apartments in Noida with world-class amenities, a prime location, and modern design. Experience luxury living like never before. Book your dream home today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-T79QX9SM" />
      </body>
    </html>
  );
}
