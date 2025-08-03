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
      className="flex items-start gap-3 p-4 rounded-xl bg-surfaceAlt border border-accent/20 shadow-card hover:shadow-lg transition md:p-6"
    >
      {icon}
      <div className="space-y-1">
        <h2 className="text-base font-semibold md:text-lg">{title}</h2>
        <p className="text-sm text-muted">{blurb}</p>
      </div>
    </a>
  );
}
