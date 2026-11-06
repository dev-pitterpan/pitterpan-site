'use client';

import { useEffect, useRef, useState } from 'react';
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

// Cada crista sobe em um ritmo diferente, com tangentes suaves entre elas.
const edgePoints = [0, 115, 245, 375, 520, 655, 785, 900, 1000];

function buildEdge(heights: number[]) {
  return edgePoints.slice(1).reduce((path, x, index) => {
    const previous = edgePoints[index];
    const handle = (x - previous) * 0.45;
    return path + `C${previous + handle} ${heights[index]} ${x - handle} ${heights[index + 1]} ${x} ${heights[index + 1]}`;
  }, `M0 ${heights[0]}`);
}

const edgeFrames = [
  [144, 138, 146, 139, 146, 139, 146, 139, 144],
  [144, 137, 122, 134, 67, 133, 103, 140, 144],
  [132, 142, 76, 117, 18, 110, 56, 133, 138],
  [105, 126, 57, 100, 9, 88, 38, 111, 102],
].map(buildEdge);

const secondRow = [...brands.slice(2), ...brands.slice(0, 2)];
const rows = [brands, secondRow];

export function FeaturedBrands() {
  const section = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const target = section.current;
    if (!target) return;

    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia(target);
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const transition = gsap.timeline({
        defaults: { duration: 0.35, ease: 'sine.inOut' },
        scrollTrigger: { trigger: target, start: 'top bottom', end: 'top 42%', scrub: 0.25 },
      });

      edgeFrames.slice(1).forEach((outline, index) => {
        transition
          .to('[data-brands-fill]', { attr: { d: `${outline}V154H-1Z` } }, index * 0.35)
          .to('[data-brands-outline]', { attr: { d: outline } }, index * 0.35);
      });

      gsap.from('[data-brand-row]', {
        y: 24,
        opacity: 0.55,
        stagger: 0.12,
        duration: 0.55,
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: '[data-brand-row]', start: 'top 92%', once: true },
      });
    });
    return () => motion.revert();
  }, []);

  return (
    <section className="featured-brands" ref={section} aria-labelledby="brands-title">
      <div className="featured-brands-edge">
        <PartyRibbon edgePath={edgeFrames[0]} />
      </div>
      <div className="shell">
        <div className="featured-brands-heading">
          <h2 id="brands-title"><span aria-hidden="true">✦</span> Marcas que você encontra aqui</h2>
          <button className="featured-brands-control" type="button" onClick={() => setPaused(!paused)}>
            {paused ? 'Retomar movimento' : 'Pausar movimento'}
          </button>
        </div>
        <div className="featured-brands-marquee" data-paused={paused}>
          {rows.map((row, rowIndex) => (
            <div className="featured-brands-row" key={row[0].handle} data-brand-row>
              <div className="featured-brands-track">
                {[0, 1].map((copy) => {
                  const repeated = copy === 1 || rowIndex === 1;

                  return (
                    <ul className="featured-brands-group" key={copy} data-copy={copy === 1} aria-hidden={repeated || undefined}>
                      {row.map(({ name, handle, image }) => (
                        <li key={handle}>
                          <a className="featured-brand" href={`${site.shop}/collections/${handle}`} tabIndex={repeated ? -1 : undefined} aria-label={name}>
                            <img src={`${site.shop}/cdn/shop/files/${image}&width=320`} alt="" width="160" height="76" loading="lazy" decoding="async" />
                            <span className="sr-only">{name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
