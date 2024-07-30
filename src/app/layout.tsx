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
    images: [
      {
        url: '/images/og-image.png',
      },
    ],
    },
  twitter: {
    card: "summary_large_image",
    title: "Joakim Andersson Photography",
    description: "Scandic photography and street art",
    images: [
      {
        url: '/images/twitter-image.jpg',
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
      <body className={`${kosugi.variable} ${krona_one.variable}`}>
        {children}
      </body>
    </html>
  );
}
