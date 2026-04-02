import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Vazby Květin — Květiny pro chvíle, na kterých záleží",
  description:
    "Smuteční, svatební a dárkové květiny. Součást ekosystému pohřební služby PEGAS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tkt6gli.css" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
