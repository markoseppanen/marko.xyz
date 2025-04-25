import type { Metadata } from "next";
import { Montserrat, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "marko.xyz",
  description: "Personal site for Marko Seppänen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
