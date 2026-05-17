import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramsclaiton.com"),
  title: {
    default: "RamsClaiton | Organic Cotton Products",
    template: "%s | RamsClaiton",
  },
  description:
    "RamsClaiton creates thoughtfully designed organic cotton floral pouches and bags inspired by timeless aesthetics, natural craftsmanship, and everyday elegance.",
  keywords: [
    "RamsClaiton",
    "organic cotton bags",
    "floral cosmetic pouch",
    "floral cosmetic bag",
    "organic cotton pouch",
    "California boutique",
    "ethical accessories",
  ],
  authors: [{ name: "RamsClaiton" }],
  creator: "RamsClaiton",
  publisher: "RamsClaiton",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/ramsclaiton-logo.png",
    apple: "/ramsclaiton-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "RamsClaiton",
    title: "RamsClaiton | Organic Cotton Products",
    description:
      "Shop RamsClaiton organic cotton products, designed in California with soft colors, practical details, and timeless boutique style.",
    images: [
      {
        url: "/ramsclaiton-logo.png",
        width: 1254,
        height: 1254,
        alt: "RamsClaiton logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RamsClaiton | Organic Cotton Products",
    description:
      "Organic cotton products inspired by timeless aesthetics, natural craftsmanship, and everyday elegance.",
    images: ["/ramsclaiton-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${greatVibes.variable}`}>{children}</body>
    </html>
  );
}
