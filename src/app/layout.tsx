import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  axes: ["wdth"],
  subsets: ["latin"],
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const title = "Mentoria particular de IA com Thiago Ramalho";
const description =
  "90 dias com acesso direto a mim para descobrir, aplicar e usar IA de forma prática no seu trabalho e na sua empresa. 1 encontro individual por semana + WhatsApp pessoal. Só 5 vagas.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "pt_BR", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#0c0f14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} dark scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
