import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="cs" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tkt6gli.css" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
