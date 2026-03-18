import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google"
import StarField from "@/components/StarField"

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",  // creates a CSS variable
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});


export const metadata: Metadata = {
  title: "Sepehr",
  description: "Portfolio of Sepehr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body>
        <StarField />
        {children}
      </body>
    </html>
  );
}
