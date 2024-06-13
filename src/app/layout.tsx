import type { Metadata } from "next";
import { Kosugi, Krona_One } from "next/font/google";
import "./globals.css";

const kosugi = Kosugi({
  subsets: ['latin'],
  variable: '--font-kosugi',
  display: 'swap',
  weight: ['400']
})
 
const krona_one = Krona_One({
  subsets: ['latin'],
  variable: '--font-krona-one',
  display: 'swap',
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Joakim Andersson Photography",
  description: "Scandic photography and street art",
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
