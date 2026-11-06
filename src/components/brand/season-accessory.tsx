import type { SeasonId } from '@/config/seasons';

export function SeasonAccessory({ season }: { season: SeasonId }) {
  switch (season) {
    case 'christmas':
      return (
        <g strokeLinejoin="round">
          <path d="M5 43C7 30 12 17 23 9C35 0 48 1 58 9C65 14 66 20 62 24L25 39C18 39 12 43 9 48Z" fill="#ee1c27" stroke="#8b101c" strokeWidth="1.5" />
          <path d="M9 41C13 29 19 22 27 17C23 23 21 30 21 36L12 46Z" fill="#be1420" />
          <path d="M13 38C13 34 16 32 20 32C21 28 24 26 28 26C29 22 34 20 38 21C40 17 44 16 48 17C51 13 55 13 58 14C64 11 69 15 69 20C70 24 67 27 63 27C61 30 57 31 53 30C51 34 47 35 43 34C41 38 36 39 33 38C30 42 26 43 22 42C19 47 12 46 13 38Z" fill="#fffdf8" stroke="#d9cfd2" strokeWidth="1" />
          <path d="M3 44C4 41 8 40 10 42C14 42 15 46 13 49C13 53 8 55 5 52C1 52 0 47 3 44Z" fill="#fffdf8" stroke="#d9cfd2" strokeWidth="1" />
        </g>
      );
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
