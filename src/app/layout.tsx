import type { Metadata } from "next";
import { Kosugi, Krona_One } from "next/font/google";
import Script from "next/script";
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

// Replace with your actual production base URL
const baseURL = "https://main--joakimandersson.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
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
        url: `${baseURL}/images/og-image.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joakim Andersson Photography",
    description: "Scandic photography and street art",
    images: [
      {
        url: `${baseURL}/images/twitter-image.jpg`,
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
      <Script id="microsoft-clarity-analytics">
      {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nk18x4sla2");
    `}
      </Script>
    </html>
  );
}