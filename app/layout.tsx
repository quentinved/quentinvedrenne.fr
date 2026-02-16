import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
