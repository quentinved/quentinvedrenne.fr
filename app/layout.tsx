import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quentin Vedrenne - Software Engineer",
  description:
    "Software Engineer specializing in Rust, AWS, and React. Building scalable systems and cloud-native applications.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://quentinvedrenne.com"),
  openGraph: {
    title: "Quentin Vedrenne - Software Engineer",
    description:
      "Software Engineer specializing in Rust, AWS, and React. Building scalable systems and cloud-native applications.",
    url: "https://quentinvedrenne.com",
    siteName: "Quentin Vedrenne",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Quentin Vedrenne - Software Engineer",
    description: "Software Engineer specializing in Rust, AWS, and React.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NT3KMC3H6D" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NT3KMC3H6D');
        `}</Script>
      </body>
    </html>
  );
}
