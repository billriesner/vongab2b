import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://vonga.io'),
  title: {
    default: 'Vonga Live Connected: NFC Apparel, Loyalty & Enterprise Activations',
    template: '%s | Vonga'
  },
  description: 'Vonga makes connected apparel that unlocks rewards and real-world access. Shop tap-ready gear, launch Club Vonga for communities, or scale Enterprise activations.',
  keywords: ['connected apparel', 'NFC clothing', 'digital twin apparel', 'loyalty apparel', 'event activations', 'NFC technology', 'smart clothing', 'wearable tech', 'tap-to-unlock', 'community rewards'],
  authors: [{ name: 'Vonga' }],
  creator: 'Vonga',
  publisher: 'Vonga',
  openGraph: {
    title: 'Vonga Live Connected: NFC Apparel, Loyalty & Enterprise Activations',
    description: 'Vonga makes connected apparel that unlocks rewards and real-world access. Shop tap-ready gear, launch Club Vonga for communities, or scale Enterprise activations.',
    url: 'https://vonga.io',
    siteName: 'Vonga',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/heroes/hero-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Vonga - Connected Apparel',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vonga Live Connected: NFC Apparel, Loyalty & Enterprise Activations',
    description: 'Vonga makes connected apparel that unlocks rewards and real-world access. Shop tap-ready gear, launch Club Vonga for communities, or scale Enterprise activations.',
    images: ['/images/heroes/hero-placeholder.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
