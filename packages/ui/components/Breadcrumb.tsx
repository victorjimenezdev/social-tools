import React from 'react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumb__list}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.breadcrumb__item}>
            {item.href ? (
              <a href={item.href} className={styles.breadcrumb__link}>
                {item.name}
              </a>
            ) : (
              <span
                aria-current="page"
                className={styles.breadcrumb__current}
              >
                {item.name}
              </span>
            )}
            {idx < items.length - 1 && (
              <span
                className={styles.breadcrumb__separator}
                aria-hidden="true"
              >
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
