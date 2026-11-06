import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/fredoka';
import '@fontsource-variable/nunito-sans';
import '@/styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: { default: 'Pitter Pan Festas | Festas, balões e confeitaria em Joinville', template: '%s | Pitter Pan Festas' },
  description: 'Explore artigos para festas, balões e confeitaria e conheça nossas três lojas em Joinville.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
