import type { ReactNode } from 'react';

const paths = {
  balloon: <><ellipse cx="12" cy="8.5" rx="6" ry="6.5"/><path d="m12 15-1.5 2h3L12 15Zm0 2c-4 3 3 3 0 6M9 8c0-1.5.5-2.5 2-3"/></>,
  cake: <><path d="M4 21V12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9M2 21h20M4 14c2 3 4 3 6 0 1.5 2 2.5 2 4 0 2 3 4 3 6 0M12 10V7m0-2c-2 0-2-2 0-4 2 2 2 4 0 4Z"/></>,
  star: <path d="m12 2 2.8 6.6 7.2.6-5.5 4.8 1.7 7-6.2-3.8L5.8 21l1.7-7L2 9.2l7.2-.6L12 2Z"/>,
  gift: <path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13m0-13H8a2.5 2.5 0 1 1 2.3-3.5L12 8Zm0 0h4a2.5 2.5 0 1 0-2.3-3.5L12 8Z"/>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  'shopping-cart': <>
    <path d="m10 18-3.1 4.1-3.4 1.4m7.4-5.1 4 2.1.7 3.4" strokeWidth="2.4" />
    <path d="M11 11.1c-1.8.1-2.7 1.4-3.3 3L6.8 17l5.2 1.6 2.3-5.9Z" fill="#3e66c7" />
    <path d="m12.4 12.8 3.5 3 4.8-1.3" strokeWidth="2.1" />
    <path d="M9 7.2a3.3 3.3 0 1 0 6.5 1.2L15 6Z" fill="#ffd5a7" stroke="#172447" strokeWidth="1.15" />
    <path d="M8.3 6.4C8.4 3 10.7 1.5 13 2c1.7.4 2.6 1.8 3.1 3.6L9.4 7Z" fill="#e72d42" stroke="#a31936" strokeWidth="1" />
    <path d="m9 6.6 6.8-1.4" stroke="#fffaf0" strokeWidth="1.7" />
    <circle cx="8" cy="7" r="1.25" fill="#fffaf0" stroke="#172447" strokeWidth=".65" />
    <path d="M19.2 11.8h2.3l3.1 10h10.6" />
    <path d="M22.5 14.4h15l-1.6 4.8h-12Z" fill="#ffe990" />
    <path d="m27 14.7.5 4m4.8-4-.5 4" stroke="#172447" strokeWidth="1" />
    <circle cx="26.4" cy="24.4" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="34" cy="24.4" r="1.5" fill="currentColor" stroke="none" />
  </>,
  'store-map': <>
    <path d="m3 9 8-3 9 3 8-3v16l-8 3-9-3-8 3Z" fill="#fff4cf" stroke="#223b7d" />
    <path d="M11 6v16m9-13v16" stroke="#9aa9c9" strokeWidth="1.15" />
    <path d="m6 19 3-2 5 1 4-3 5 2 2-2" stroke="#395cb3" strokeWidth="1.15" strokeDasharray="1.4 2" />
    <path d="M24 6.7c0 3.1-4.6 7.4-4.6 7.4s-4.6-4.3-4.6-7.4a4.6 4.6 0 0 1 9.2 0Z" fill="#e72d42" stroke="#a31936" strokeWidth="1" />
    <circle cx="19.4" cy="6.7" r="1.5" fill="#fffaf0" stroke="none" />
  </>,
  pin: <><path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></>,
} satisfies Record<string, ReactNode>;

export function Icon({ name }: { name: keyof typeof paths }) {
  const isCart = name === 'shopping-cart';
  const isMap = name === 'store-map';
  const viewBox = isCart ? '0 0 40 28' : isMap ? '0 0 31 28' : '0 0 24 24';
  return <svg className={isCart || isMap ? `icon-${name}` : undefined} viewBox={viewBox} width={isCart ? 40 : isMap ? 31 : 24} height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
