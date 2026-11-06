import { navigation, site } from '@/config/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell grid gap-8 sm:grid-cols-3">
        <div><strong className="footer-title">Pitter Pan Festas</strong><p>Festas, balões e confeitaria em Joinville.</p></div>
        <nav aria-label="Mapa do site">{navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}</nav>
        <nav aria-label="Compras"><a href={site.catalog}>Catálogo ↗</a><a href={site.shop}>Loja online ↗</a></nav>
      </div>
    </footer>
  );
}
