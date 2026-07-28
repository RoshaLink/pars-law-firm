import type { Metadata } from "next";
import { Fraunces, Inter, Vazirmatn, Noto_Naskh_Arabic } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-farsi",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-farsi-display",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pars | Immigration & Family Law, Toronto",
  description:
    "Pars is a Toronto immigration and family law practice, fully bilingual in English and Farsi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${vazirmatn.variable} ${notoNaskhArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
