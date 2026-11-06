'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cta } from '../ui/cta';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia(root);
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-hero-parallax]', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-line]', { y: 25, opacity: 0, stagger: 0.12, duration: 0.65, clearProps: 'all' })
        .from('[data-hero-image]', { scale: 1.055, duration: 1.05, clearProps: 'all' }, 0);
    });
    return () => motion.revert();
  }, []);

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="hero-figure">
        <picture data-hero-parallax>
          <source media="(max-width: 600px)" srcSet="/images/banner-pitter-pan-mobile.webp" width="750" height="500" />
          <source media="(max-width: 1200px)" srcSet="/images/banner-pitter-pan-tablet.webp" width="1120" height="630" />
          <img
            src="/images/banner-pitter-pan-festas.webp"
            alt="Fachada amarela da Pitter Pan Festas com letreiro e faixas coloridas"
            width="1672"
            height="941"
            fetchPriority="high"
            data-hero-image
          />
        </picture>
      </div>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-hero-line>✦ &nbsp; Joinville, SC</p>
          <p data-hero-line>Do primeiro balão ao último pedaço de bolo. Encontre os detalhes que deixam a comemoração com a sua cara.</p>
          <div className="flex flex-wrap gap-3" data-hero-line><Cta href="/colecoes/" variant="light">Explorar coleções</Cta><Cta href="/lojas/" variant="outline">Encontrar uma loja</Cta></div>
        </div>
        <div className="hero-signature" data-hero-line>
          <h1 id="hero-title">Pitter Pan <span className="sr-only">Festas</span></h1>
          <p>Balões <span>✦</span> Decoração <span>✦</span> Confeitaria</p>
        </div>
      </div>
    </section>
  );
}
