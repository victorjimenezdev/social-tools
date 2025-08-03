import React from 'react';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex text-sm text-[#4b5563]">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.href ? (
              <a href={item.href} className="hover:underline">
                {item.name}
              </a>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {idx < items.length - 1 && (
              <span className="mx-2 hidden sm:inline" aria-hidden="true">
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
