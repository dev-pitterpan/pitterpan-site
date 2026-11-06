import { collections } from '@/config/site';
import { Icon } from './icon';

export function CollectionGrid({ featured = false }: { featured?: boolean }) {
  const entries = featured ? collections.slice(0, 3) : collections;
  return (
    <ul className="card-grid">
      {entries.map(({ title, label, description, href, icon, color }) => (
        <li key={title}>
          <a href={href} className="collection-card" data-color={color}>
            <div className="card-icon"><Icon name={icon} /></div>
            <p className="eyebrow">{label}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="card-arrow"><Icon name="arrow" /></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
