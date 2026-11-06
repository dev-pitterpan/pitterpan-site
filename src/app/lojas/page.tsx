import type { Metadata } from 'next';
import { PageIntro } from '@/components/ui/page-intro';
import { Icon } from '@/components/ui/icon';
import { Cta } from '@/components/ui/cta';
import { site, stores } from '@/config/site';

export const metadata: Metadata = { title: 'Nossas lojas' };

export default function StoresPage() {
  return (
    <>
      <PageIntro label="Nossas lojas" title={<>Três endereços <em>em Joinville.</em></>}>Escolha a unidade mais perto de você e veja como chegar.</PageIntro>
      <section className="shell section-space" aria-label="Unidades">
        <ul className="card-grid">
          {stores.map(({ name, address, phone, tel }) => {
            const query = encodeURIComponent(`Pitter Pan Festas ${address} ${name} Joinville SC`);
            return (
              <li key={name} className="store-card">
                <div className="card-icon"><Icon name="pin" /></div>
                <h2>{name}</h2>
                <address>{address}<br /><a href={`tel:${tel}`}>{phone}</a></address>
                <Cta href={`https://www.google.com/maps/search/?api=1&query=${query}`} variant="outline">Ver no mapa</Cta>
              </li>
            );
          })}
        </ul>
        <div className="catalog-banner mt-8"><div><h2>Comprando de outra cidade?</h2><p>Faça o pedido pela loja online. A unidade Iririú cuida da expedição.</p></div><Cta href={site.shop} variant="light">Acessar loja online</Cta></div>
      </section>
    </>
  );
}
