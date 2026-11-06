import type { SeasonId } from '@/config/seasons';

export function SeasonAccessory({ season }: { season: SeasonId }) {
  switch (season) {
    case 'christmas':
      return <g transform="rotate(14 55 20)"><path d="M39 22Q49 0 65 5L78 17L66 13L68 23Z" fill="#ed3947"/><rect x="38" y="20" width="31" height="7" rx="3.5" fill="#fff"/><circle cx="77" cy="17" r="5" fill="#fff"/></g>;
    case 'halloween':
      return <g><path d="m43 22 13-18 10 4-4 13 12 5-3 4-33-4Z" fill="#251333"/><path d="m45 19 19 3" stroke="#ff843d" strokeWidth="4"/></g>;
    case 'easter':
      return <g fill="#ffbbd6"><ellipse cx="48" cy="15" rx="5" ry="13" transform="rotate(-17 48 15)"/><ellipse cx="62" cy="15" rx="5" ry="13" transform="rotate(17 62 15)"/></g>;
    case 'valentine':
      return <path d="M55 25C39 16 45 4 55 12C65 4 71 16 55 25Z" fill="#ff899c"/>;
    case 'junina':
      return <g><path d="M33 14q22 11 46-2" fill="none" stroke="#ffefb1" strokeWidth="2"/><path d="m38 16 9 2-6 8Z" fill="#ff7469"/><path d="m52 19 9-1-4 9Z" fill="#ffda60"/><path d="m66 17 9-3-2 10Z" fill="#8de7c3"/></g>;
    case 'carnival':
      return <path d="M40 15q7-4 15 2 8-6 15-2l-3 8q-6 5-12-1-6 6-12 1Z" fill="#ff81da" stroke="#283688" strokeWidth="2"/>;
    case 'children':
      return <g fill="#90f1da"><circle cx="44" cy="17" r="4"/><circle cx="66" cy="16" r="5"/><path d="m54 5 2 5 5 1-4 3 1 5-4-3-5 3 2-5-4-3 5-1Z"/></g>;
    case 'new-year':
      return <path d="m55 4 2 8 8 2-8 2-2 8-2-8-8-2 8-2Z" fill="#f3d377"/>;
    default:
      return null;
  }
}
