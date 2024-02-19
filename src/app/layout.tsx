import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/components/navbar-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPTQ Al Madinah",
  description: "Membangun Generasi Pengemban Al Qur'an Yang Rabbani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </head>
      <body className={`${inter.className} text-white/70 tracking-wide`}>
        <NavbarSection />
        {children}
      </body>
    </html>
  );
}
