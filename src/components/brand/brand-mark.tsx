'use client';

import { useSyncExternalStore } from 'react';
import { seasons, type SeasonId } from '@/config/seasons';
import { getSeason } from '@/lib/season';
import { SeasonAccessory } from './season-accessory';
import { brandPaths } from './brand-paths';

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

  const isDefault = seasonId === 'default';

  return (
    <svg className="brand-mark" viewBox={isDefault ? '0 0 443 474' : '0 -45 443 519'} role="img" aria-label={season.label ? `Pitter Pan Festas, edição de ${season.label}` : 'Pitter Pan Festas'} data-season={seasonId}>
      <path d={brandPaths.body.path} fill={isDefault ? brandPaths.body.fill : season.background} fillRule="evenodd" />
      <path d={brandPaths.red.path} fill={isDefault ? brandPaths.red.fill : season.primary} fillRule="evenodd" />
      <path d={brandPaths.yellow.path} fill={isDefault ? brandPaths.yellow.fill : season.secondary} fillRule="evenodd" />
      <path d={brandPaths.white.path} fill={brandPaths.white.fill} fillRule="evenodd" />
      <g transform="translate(56 -48) scale(3)">
        <SeasonAccessory season={seasonId} />
      </g>
    </svg>
  );
}
