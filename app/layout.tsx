import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Acción por los Derechos Fundamentales, A.C.",
    template: "%s | Acción por los Derechos Fundamentales",
  },
  description:
    "Organización civil dedicada a la defensa y promoción de los derechos fundamentales en México.",
  metadataBase: new URL("https://accionderechosfundamentales.org"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Acción por los Derechos Fundamentales, A.C.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
