import type { Metadata } from 'next';
import { CollectionGrid } from '@/components/ui/collection-grid';
import { PageIntro } from '@/components/ui/page-intro';

export const metadata: Metadata = { title: 'Coleções' };

export default function CollectionsPage() {
  return (
    <>
      <PageIntro label="Coleções Pitter Pan" title={<>Seu jeito de <em>celebrar.</em></>}>Escolha por onde começar e explore os produtos na nossa loja online ou no catálogo sazonal.</PageIntro>
      <section className="shell section-space" aria-label="Categorias"><CollectionGrid /></section>
    </>
  );
}
