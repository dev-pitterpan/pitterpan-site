import type { ReactNode } from 'react';
import { Icon } from './icon';

export function Cta({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'light' | 'outline' }) {
  return (
    <a href={href} className={`cta cta--${variant}`}>
      <span className="cta-icon" aria-hidden="true">
        <span className="cta-icon-track"><Icon name="arrow" /><Icon name="arrow" /></span>
      </span>
      <span className="cta-label">
        <span className="cta-label-track"><span>{children}</span><span aria-hidden="true">{children}</span></span>
      </span>
    </a>
  );
}
