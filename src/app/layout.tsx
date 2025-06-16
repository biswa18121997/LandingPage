
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AOSProvider } from './AOSProvider'




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Header />
      <AOSProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
