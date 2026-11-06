import Image from 'next/image';
import { PartyRibbon } from '../layout/party-ribbon';
import styles from './about-hero.module.css';

const pillars = [
  { name: 'Missão', accent: 'yellow', text: 'Ajudar cada cliente a celebrar do seu jeito, reunindo artigos para festas, balões e confeitaria.' },
  { name: 'Visão', accent: 'red', text: 'Ser uma referência em celebrações em Joinville, com uma experiência próxima e prática na loja e no digital.' },
  { name: 'Valores', accent: 'blue', text: 'Cuidado no atendimento, criatividade nos detalhes e respeito por quem celebra com a gente.' },
] as const;

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <div className={`shell ${styles.stage}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}><span aria-hidden="true">✦</span> Sobre a Pitter Pan</p>
          <h1 id="about-title">A festa começa <em>nos detalhes.</em></h1>
          <p>Em três lojas de Joinville, a Pitter Pan reúne artigos para festas, balões e confeitaria para quem quer celebrar do seu jeito.</p>
        </div>

        <figure className={styles.portrait}>
          <Image src="/images/about/seu-pitter.webp" alt="Seu Pitter, dono da Pitter Pan Festas, de braços cruzados" width={270} height={960} priority />
          <figcaption>Seu Pitter <span>•</span> Pitter Pan Festas</figcaption>
        </figure>

        <svg className={styles.connections} viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" strokeWidth="1.4" vectorEffect="non-scaling-stroke">
            <path d="M509 134H580Q593 134 605 145L628 165Q639 175 654 175H815" stroke="#ffd954" />
            <path d="M553 244H604Q618 244 630 258L652 284Q664 298 681 298H815" stroke="#ff7881" />
            <path d="M536 390H619Q634 390 645 401L657 413Q668 424 684 424H815" stroke="#91bcff" />
          </g>
          <circle cx="509" cy="134" r="4" fill="#ffd954" />
          <circle cx="553" cy="244" r="4" fill="#ff7881" />
          <circle cx="536" cy="390" r="4" fill="#91bcff" />
        </svg>

        <ul className={styles.pillars} aria-label="Missão, visão e valores">
          {pillars.map(({ name, accent, text }, index) => (
            <li className={styles.card} key={name} data-accent={accent}>
              <span className={styles.index} aria-hidden="true">0{index + 1}</span>
              <h2>{name}</h2>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <PartyRibbon />
    </section>
  );
}
