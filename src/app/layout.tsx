import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { inter, jersey20, geistMono, sonsie } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Cristian Sîrbu',
  description: 'My portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jersey20.variable} ${geistMono.variable} ${sonsie.variable}`}
    >
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <footer className="w-full -mt-8 mb-4">
            <p className="w-full text-center font-medium text-xs text-[#86868B]">
              Designed <code>&&</code> Built with
              <Image
                src="/icons/misc/heart.svg"
                alt="heart"
                width={12}
                height={11}
                className="inline-block mx-1"
              />
              by Cristian Sîrbu
            </p>
          </footer>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
