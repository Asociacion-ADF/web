import type { Metadata } from "next";
import { Epilogue, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Acción por los Derechos Fundamentales, A.C.",
    template: "%s | Acción por los Derechos Fundamentales",
  },
  description:
    "Asociación civil apartidista con sede en Tijuana, Baja California. Promovemos participación ciudadana, formación cívica, diálogo social, defensa de derechos fundamentales e incidencia institucional.",
  metadataBase: new URL("https://www.asociacionaccion.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Acción por los Derechos Fundamentales, A.C.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-main font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
