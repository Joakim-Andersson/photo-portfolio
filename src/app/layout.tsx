import type { Metadata } from "next";
import { Kosugi, Krona_One } from "next/font/google";
import "./globals.css";

const kosugi = Kosugi({
  subsets: ['latin'],
  variable: '--font-kosugi',
  display: 'swap',
  weight: ['400']
});

const krona_one = Krona_One({
  subsets: ['latin'],
  variable: '--font-krona-one',
  display: 'swap',
  weight: ['400']
});

export const metadata: Metadata = {
  title: "Joakim Andersson Photography",
  description: "Scandic photography and street art",
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/web-icon-512.png',
  },
  openGraph: {
    title: "Joakim Andersson Photography",
    description: "Scandic photography and street art",
    url: "https://myapp.com",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joakim Andersson Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joakim Andersson Photography",
    description: "Scandic photography and street art",
    images: [
      {
        url: "/images/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joakim Andersson Photography",
      },
    ],
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
        <link rel="icon" href="/images/favicon.svg" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/web-icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Joakim Andersson Photography" />
        <meta property="og:description" content="Scandic photography and street art" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://myapp.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joakim Andersson Photography" />
        <meta name="twitter:description" content="Scandic photography and street art" />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body className={`${kosugi.variable} ${krona_one.variable}`}>
        {children}
      </body>
    </html>
  );
}
