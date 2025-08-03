import * as React from 'react';

export interface CardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  blurb: string;
}

export function Card({ href, icon, title, blurb }: CardProps) {
  return (
    <a
      href={href}
      aria-label={`Open ${title}`}
      className="block rounded border p-4 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      <div className="text-3xl">{icon}</div>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{blurb}</p>
    </a>
  );
}
