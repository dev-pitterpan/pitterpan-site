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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
  },
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
