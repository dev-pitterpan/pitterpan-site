'use client';

import { useSyncExternalStore } from 'react';
import { seasons, type SeasonId } from '@/config/seasons';
import { getSeason } from '@/lib/season';
import { SeasonAccessory } from './season-accessory';

function subscribe(update: () => void) {
  // Atualiza também em abas que ficaram suspensas durante uma virada de data.
  const timer = window.setInterval(update, 30_000);
  document.addEventListener('visibilitychange', update);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener('visibilitychange', update);
  };
}

function getServerSeason(): SeasonId {
  return 'default';
}

export function BrandMark() {
  const seasonId = useSyncExternalStore(subscribe, getSeason, getServerSeason);
  const season = seasons[seasonId];

  return (
    <svg className="brand-mark" viewBox="0 0 110 85" role="img" aria-label={season.label ? `Pitter Pan Festas, edição de ${season.label}` : 'Pitter Pan Festas'} data-season={seasonId}>
      <ellipse cx="55" cy="49" rx="50" ry="33" fill={season.background} />
      <path d="m95 26 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill={season.secondary} />
      <g textAnchor="middle" className="brand-lettering">
        <text x="53" y="43" fontSize="25" fill={season.primary}>Pitter</text>
        <text x="54" y="63" fontSize="28" fill={season.secondary}>Pan</text>
        <text x="55" y="75" fontSize="8" letterSpacing="2" fill="#fff">FESTAS</text>
      </g>
      <SeasonAccessory season={seasonId} />
    </svg>
  );
}
