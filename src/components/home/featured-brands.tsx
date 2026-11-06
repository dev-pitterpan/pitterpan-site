'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from '@/config/site';
import { PartyRibbon } from '../layout/party-ribbon';

const brands = [
  { name: 'Regina Festas', handle: 'regina', image: 'Regina_Festas.jpg?v=1787656037' },
  { name: 'Sicao', handle: 'sicao', image: 'SICAO.jpg?v=1787413778' },
  { name: 'BWB', handle: 'bwb', image: 'marcas-bwb.png?v=1724941108' },
  { name: 'Harald', handle: 'harald', image: 'marcas-harald.png?v=1724941108' },
  { name: 'Mix', handle: 'mix', image: 'marcas-mix.png?v=1724941108' },
];


export function FeaturedBrands() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = section.current;
    if (!target) return;

    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia(target);
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(target, {
        '--brand-wave-lift': '24px',
        ease: 'none',
        scrollTrigger: { trigger: target, start: 'top bottom', end: 'top 48%', scrub: true },
      });
    });
    return () => motion.revert();
  }, []);

  return (
    <section className="featured-brands" ref={section} aria-labelledby="brands-title">
      <div className="featured-brands-edge">
        <PartyRibbon bottomEdge />
      </div>
      <div className="shell">
        <p className="eyebrow">Do nosso catálogo</p>
        <h2 id="brands-title">Marcas que você encontra aqui</h2>
        <ul className="featured-brands-grid">
          {brands.map(({ name, handle, image }) => (
            <li key={handle}>
              <a className="featured-brand" href={`${site.shop}/collections/${handle}`}>
                <img src={`${site.shop}/cdn/shop/files/${image}&width=320`} alt="" width="160" height="76" loading="lazy" decoding="async" />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
