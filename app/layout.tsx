import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DezinetVerse — Beyond the Algorithm',
  description: 'Travel. Survival. Tech. Food. Premium, cinematic content from the Dezinet creator ecosystem. Watch exclusive series, trending originals, and join the elite lounge.',
  keywords: ['vlog', 'travel', 'survival', 'premium content', 'vlogger', 'DezinetVerse'],
  openGraph: {
    title: 'DezinetVerse — Beyond the Algorithm',
    description: 'Watch exclusive vlogs, survival series, and join our elite creator lounge.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DezinetVerse — Beyond the Algorithm',
    description: 'Watch exclusive vlogs and cinematic creator series.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
