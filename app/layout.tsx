import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Arbor Financial",
  description: "Arbor is a banking platform that allows users to freely access, transfer, and manage money",
  icons: {
    icon: '/icons/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${inter.variable} ${ibmPlexSerif.variable}`} >{children}</body>
    </html>
  );
}
