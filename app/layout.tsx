import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Layout/Footer";
import CardNav from "@/components/CardNav";
import { items } from "@/constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Top Cinema - Movies & TV Shows Database",
    template: "%s | Top Cinema",
  },
  description: "Movies & TV Shows Database and Celebrities Information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Providers>
          <CardNav
            items={items}
            className="fixed! backdrop-blur-md"
            baseColor="transparent"
            menuColor="#fff"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="elastic.out(1,0.8)"
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


// Navbar Search
