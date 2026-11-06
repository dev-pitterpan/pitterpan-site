'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation, site } from '@/config/site';
import { BrandMark } from '../brand/brand-mark';
import { Cta } from '../ui/cta';
import { PartyRibbon } from './party-ribbon';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);

  return (
    <>
      {!isHome && <div className="topline">ARTIGOS PARA FESTAS · JOINVILLE, SC</div>}
      <header className={isHome ? 'site-header site-header--overlay' : 'site-header'} onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          document.getElementById('menu-button')?.focus();
        }
      }}>
        <PartyRibbon />
        <div className="shell header-content flex items-center justify-between gap-5">
          <a href="/" className="brand-link"><BrandMark /></a>
          {isHome && <span className="header-label">O mundo das festas</span>}
          <button id="menu-button" className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}</button>
          <nav id="main-nav" className="site-nav" aria-label="Principal" data-open={open}>
            {navigation.map(({ href, label }) => <a key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</a>)}
            <a href={site.catalog}>Catálogo ↗</a>
            <a className="mobile-shop" href={site.shop}>Loja online ↗</a>
          </nav>
          <div className="desktop-shop"><Cta href={site.shop} variant="light">Loja online</Cta></div>
        </div>
      </header>
    </>
  );
}
