import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piantino Portfólio",
  description: "Site pessoal na área de Desenvolvimento de Software",
};

const links = [
  { 'href': '/', 'name': 'Início' },
  { 'href': '/sobre', 'name': 'Sobre' },
  { 'href': '/projetos', 'name': 'Projetos' },
  { 'href': '/reconhecimentos', 'name': 'Reconhecimentos' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " flex justify-center p-6 top"}>
        <div className="space-y-5">
          <Header links={links}></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
