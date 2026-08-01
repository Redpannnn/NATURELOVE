import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tama & Septi - Wedding Invitation",
  description: "The Wedding of Tama & Septi - 01 Desember 2026",
  icons: {
    icon: "https://imglinkv-3.vercel.app/api/images/cmsabth7rx1pmsffl/file",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${greatVibes.variable} antialiased`}
        style={{ margin: 0, padding: 0, overflow: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
