import React, { type Key, type ReactNode } from 'react';

export interface CardProps {
  href: string;
  icon: ReactNode;
  title: string;
  blurb: string;
  key?: Key;
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
      <p className="mt-1 text-sm text-[#4b5563]">{blurb}</p>
    </a>
  );
}
