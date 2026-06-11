import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "LuttiVox",
  description: "Aprender nunca foi tão simples",
  robots: {
     index: true,
     follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", plus_jakarta_sans.className, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
