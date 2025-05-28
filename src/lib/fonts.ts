import { Inter, Geist_Mono, Jersey_20, Sonsie_One } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const jersey20 = Jersey_20({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jersey-20',
  weight: '400',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const sonsie = Sonsie_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sonsie',
  weight: '400',
});
