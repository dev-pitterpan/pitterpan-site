import { Hero } from '@/components/home/hero';
import { CollectionGrid } from '@/components/ui/collection-grid';
import { Cta } from '@/components/ui/cta';
import { site } from '@/config/site';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="category-strip">BALÕES <span>✦</span> DECORAÇÃO <span>✦</span> CONFEITARIA <span>✦</span> FANTASIAS</div>
      <section className="shell section-space">
        <div className="section-heading"><div><p className="eyebrow">Escolha por onde começar</p><h2>O que vamos <em>celebrar?</em></h2></div><Cta href="/colecoes/" variant="outline">Todas as coleções</Cta></div>
        <CollectionGrid featured />
      </section>
      <section className="shell pb-16 lg:pb-24">
        <div className="catalog-banner">
          <div><p className="eyebrow">Catálogo Pitter Pan</p><h2>Temporada de comemorar.</h2><p>Encontre ideias para Natal, Halloween, Festa Junina e outras datas especiais.</p></div>
          <Cta href={site.catalog} variant="light">Abrir catálogo</Cta>
        </div>
      </section>
    </>
  );
}
