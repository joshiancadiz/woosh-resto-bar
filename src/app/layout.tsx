import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Woosh Resto Bar",
  icons: {
    icon: "/logo/favicon.ico"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
            {children}
        <Footer />
      </body>
    </html>
  );
}
