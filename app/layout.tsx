import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Layout/Footer";
import CardNav from "@/components/CardNav";
import { items } from "@/constant";

const cairo = Cairo({
  weight: ["500", "400", "600", "700"],
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
      <body className={` ${cairo.className}   antialiased`}>
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
