import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://quentinvedrenne.com";
const TITLE = "Quentin Vedrenne — Software Engineer | Rust, AWS, Cloud";
const DESCRIPTION =
  "Founding engineer at Edamame Technologies and creator of Whisper, an open-source zero-knowledge secret manager. I build production systems in Rust, on AWS, and across the cloud.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      // Legacy fallback for very old browsers
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Quentin Vedrenne",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Quentin Vedrenne — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Quentin Vedrenne",
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  jobTitle: "Software Engineer",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/quentinved",
    "https://www.linkedin.com/in/quentin-vedrenne/",
  ],
  knowsAbout: [
    "Rust",
    "TypeScript",
    "Go",
    "AWS",
    "Cloud Architecture",
    "Kubernetes",
    "React",
    "Next.js",
    "Cryptography",
    "Open-Source Software",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Edamame Technologies",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Quentin Vedrenne",
  url: SITE_URL,
  description: DESCRIPTION,
  author: { "@type": "Person", name: "Quentin Vedrenne" },
  inLanguage: "en",
};

// Inline script that runs before paint to set the theme class on <html>,
// preventing a flash of the wrong palette on first load.
const themeInitScript = `
(function(){try{var s=localStorage.getItem('theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var c=document.documentElement.classList;c.toggle('dark',t==='dark');c.toggle('light',t==='light');}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}

        {/* JSON-LD structured data — helps Google show a rich knowledge panel */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

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
