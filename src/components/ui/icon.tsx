import type { ReactNode } from 'react';

const paths = {
  balloon: <><ellipse cx="12" cy="8.5" rx="6" ry="6.5"/><path d="m12 15-1.5 2h3L12 15Zm0 2c-4 3 3 3 0 6M9 8c0-1.5.5-2.5 2-3"/></>,
  cake: <><path d="M4 21V12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9M2 21h20M4 14c2 3 4 3 6 0 1.5 2 2.5 2 4 0 2 3 4 3 6 0M12 10V7m0-2c-2 0-2-2 0-4 2 2 2 4 0 4Z"/></>,
  star: <path d="m12 2 2.8 6.6 7.2.6-5.5 4.8 1.7 7-6.2-3.8L5.8 21l1.7-7L2 9.2l7.2-.6L12 2Z"/>,
  gift: <path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13m0-13H8a2.5 2.5 0 1 1 2.3-3.5L12 8Zm0 0h4a2.5 2.5 0 1 0-2.3-3.5L12 8Z"/>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  'shopping-cart': <>
    <circle cx="9" cy="4.8" r="2.15" fill="currentColor" stroke="none" />
    <path d="M8.4 8.5 6.8 14l4.5 2.7.8 4.3m-5.3-7-2 4.3L2.4 20.5M8.4 8.5l3.9 3.7 4.2-2.3" strokeWidth="1.9" />
    <path d="M15.1 8.5h2.4l2.8 9h8.9M19 11h11.4l-1.6 4.6h-8.9m3-4.6.7 4.6m3.3-4.6-.4 4.6" />
    <circle cx="22" cy="20.5" r="1.35" fill="currentColor" stroke="none" />
    <circle cx="28" cy="20.5" r="1.35" fill="currentColor" stroke="none" />
  </>,
  pin: <><path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></>,
} satisfies Record<string, ReactNode>;

export function Icon({ name }: { name: keyof typeof paths }) {
  const isCart = name === 'shopping-cart';
  return <svg className={isCart ? 'icon-shopping-cart' : undefined} viewBox={isCart ? '0 0 32 24' : '0 0 24 24'} width={isCart ? 32 : 24} height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
