import type { ReactNode } from 'react';
import { Icon } from './icon';

export function Cta({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'light' | 'outline' }) {
  return <a href={href} className={`cta cta--${variant}`}>{children}<Icon name="arrow" /></a>;
}
