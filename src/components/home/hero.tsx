'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cta } from '../ui/cta';

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const motion = gsap.matchMedia(root);
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-line]', { y: 25, opacity: 0, stagger: 0.12, duration: 0.65, clearProps: 'all' })
        .from('[data-hero-image]', { scale: 1.055, duration: 1.05, clearProps: 'all' }, 0);
    });
    return () => motion.revert();
  }, []);

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-hero-line>✦ &nbsp; O mundo das festas em Joinville</p>
          <h1 id="hero-title" data-hero-line>Hoje é dia<br />de <em>festa!</em></h1>
          <p data-hero-line>Do primeiro balão ao último pedaço de bolo. Encontre os detalhes que deixam a comemoração com a sua cara.</p>
          <div className="flex flex-wrap gap-3" data-hero-line><Cta href="/colecoes/" variant="light">Explorar coleções</Cta><Cta href="/lojas/" variant="outline">Encontrar uma loja</Cta></div>
        </div>
        <figure className="hero-figure">
          <Image src="/images/celebracao.webp" alt="Balões coloridos, presentes e bolo em cenário de festa" fill preload sizes="(max-width: 820px) 100vw, 58vw" data-hero-image />
          <figcaption>Imagem conceitual</figcaption>
        </figure>
      </div>
    </section>
  );
}
