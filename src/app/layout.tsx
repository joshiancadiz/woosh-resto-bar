"use client"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
          <ParallaxProvider>
            {children}
          </ParallaxProvider>
        <Footer />
      </body>
    </html>
  );
}
