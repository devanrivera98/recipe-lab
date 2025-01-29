import type { Metadata } from "next";
import { Crimson_Pro, Mulish } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import "./scss/main.scss";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"]
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Rumble Recipe",
  description: "Created by Devan Rivera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body
className={`${crimsonPro.variable} ${mulish.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
