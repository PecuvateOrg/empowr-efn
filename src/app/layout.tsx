import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://efn.empowrcic.org"),
  title: "Empowr Freelancer Network",
  description:
    "The EFN connects skilled professionals with meaningful work — without the invoicing overhead.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Empowr Freelancer Network",
    description:
      "The EFN connects skilled professionals with meaningful work — without the invoicing overhead.",
    url: "https://efn.empowrcic.org",
    siteName: "Empowr Freelancer Network",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowr Freelancer Network",
    description:
      "The EFN connects skilled professionals with meaningful work — without the invoicing overhead.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Empowr CIC",
    "url": "https://empowrcic.org",
    "description": "Empowr CIC is a UK-based Community Interest Company focused on empowering individuals through education, employment, and community connection.",
    "sameAs": [
      "https://www.linkedin.com/company/empowr-cic",
      "https://www.instagram.com/empowr.cic",
      "https://www.facebook.com/empowr.cic",
      "https://www.youtube.com/@empowr.cic"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Empowr Freelancer Network",
    "url": "https://efn.empowrcic.org",
    "description": "The Empowr Freelancer Network (EFN) is a managed freelancer ecosystem connecting skilled community members with paid freelance opportunities, operated by Empowr CIC."
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
