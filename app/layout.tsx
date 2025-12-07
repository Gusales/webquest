import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ['100', '400', '500', '600', '800']
})

export const metadata: Metadata = {
  title: {
    default: "WebQuest",
    template: "WebQuest - %s"
  },
  description: "WebQuest interativa abordando conceitos de Cálculo, Estatística Aplicada e Programação Linear para resolução de problemas.",
  applicationName: "WebQuest Acadêmica",
  authors: [{ 
    name: "Gustavo Sales", 
    url: "https://gusales.vercel.app/" 
  }],
  generator: "Next.js",
  keywords: ["WebQuest", "Cálculo", "Estatística", "Programação Linear", "Matemática", "Educação"],
  category: "education",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${robotoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
