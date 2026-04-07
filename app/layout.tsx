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
  title: "Premium Vlogging & OTT Template | Next.js",
  description: "A fast and responsive video platform template for creators. Built with Next.js, this starter kit includes a custom video player, ad-skip features, and easy content management.",
  keywords: [
    "Next.js vlogging template",
    "OTT frontend kit",
    "React video player ads",
    "Static video platform",
    "Video series template",
    "Creator economy website"
  ],
  authors: [{ name: "Dezinet" }],
  openGraph: {
    title: "Vlogging & OTT Video Template",
    description: "Build your own premium video streaming site with this high-performance Next.js starter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Vlogging & OTT Starter",
    description: "The best open-source foundation for your personal video platform.",
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
