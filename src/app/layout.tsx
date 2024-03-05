import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piantino Portfólio",
  description: "Site pessoal na área de Desenvolvimento de Sofware",
};

const links = [
  {'href': '/', 'name': 'Início'},
  {'href': '/sobre', 'name': 'Sobre'},
  {'href': '/projetos', 'name': 'Projetos'},
  {'href': '/reconhecimentos', 'name': 'Reconhecimentos'},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + ' p-6 space-y-5'}>
        <Header links={links}></Header>
        {children}
      </body>
    </html>
  );
}
