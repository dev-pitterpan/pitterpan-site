import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { Cta } from '@/components/ui/cta';

export const metadata: Metadata = { title: 'Sobre nós' };

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <section className="shell section-space grid gap-8 md:grid-cols-2">
        <div><p className="eyebrow">Nossa proposta</p><h2>Da primeira ideia à mesa posta.</h2></div>
        <div className="reading">
          <p>Quem chega à Pitter Pan pode estar procurando um único balão para uma surpresa, os ingredientes de uma encomenda ou todos os detalhes de uma festa temática.</p>
          <p>Reunimos decoração, fantasias, embalagens, guloseimas e insumos de confeitaria para esses diferentes momentos. Explore as coleções online ou venha conversar com nossa equipe em uma das lojas.</p>
          <Cta href="/lojas/">Conhecer as unidades</Cta>
        </div>
      </section>
    </>
  );
}
