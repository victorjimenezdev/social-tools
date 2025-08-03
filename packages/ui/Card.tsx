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
      className="flex items-start gap-3 p-4 rounded-2xl bg-surfaceAlt border border-accent/20 shadow-card transition-transform hover:-translate-y-1 hover:shadow-md md:p-6"
    >
      {icon}
      <div className="space-y-1">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm text-muted">{blurb}</p>
      </div>
    </a>
  );
}
