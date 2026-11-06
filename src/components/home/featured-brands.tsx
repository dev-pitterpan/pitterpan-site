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


// Cada trecho tem os mesmos comandos SVG para interpolar os degraus durante o scroll.
function buildEdge(heights: number[]) {
  return 'M-1 144' + heights.map((height, index) => {
    const x = index * 200;
    return `L${x} ${height}C${x + 65} ${height - 8} ${x + 135} ${height + 8} ${x + 200} ${height}`;
  }).join('') + 'L1001 144';
}

const edgeFrames = [
  [144, 144, 144, 144, 144],
  [144, 144, 48, 144, 144],
  [144, 85, 20, 85, 144],
  [120, 72, 12, 72, 120],
].map(buildEdge);

export function FeaturedBrands() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = section.current;
    if (!target) return;

    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia(target);
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const transition = gsap.timeline({
        defaults: { duration: 0.36, ease: 'none' },
        scrollTrigger: { trigger: target, start: 'top bottom', end: 'top 25%', scrub: true },
      });

      edgeFrames.slice(1).forEach((outline, index) => {
        transition
          .to('[data-brands-fill]', { attr: { d: `${outline}V154H-1Z` } }, index * 0.36)
          .to('[data-brands-outline]', { attr: { d: outline } }, index * 0.36);
      });

      transition
        .from('[data-brand-row="first"]', { xPercent: -5, opacity: 0.35 }, 0.8)
        .from('[data-brand-row="second"]', { xPercent: 5, opacity: 0.35 }, 0.88);
    });
    return () => motion.revert();
  }, []);

  return (
    <section className="featured-brands" ref={section} aria-labelledby="brands-title">
      <div className="featured-brands-edge">
        <PartyRibbon edgePath={edgeFrames[0]} />
      </div>
      <div className="shell">
        <p className="eyebrow">Do nosso catálogo</p>
        <h2 id="brands-title">Marcas que você encontra aqui</h2>
        <ul className="featured-brands-grid">
          {brands.map(({ name, handle, image }, index) => (
            <li key={handle} data-brand-row={index < 3 ? 'first' : 'second'}>
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
