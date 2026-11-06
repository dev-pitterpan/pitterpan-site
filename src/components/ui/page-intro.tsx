import type { ReactNode } from 'react';

export function PageIntro({ label, title, children }: { label: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="shell">
        <p className="eyebrow">✦ &nbsp; {label}</p>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
