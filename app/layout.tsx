import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RamsClaiton.Cali",
  description: "A soft pastel boutique with curated Poshmark floral cotton bags.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
