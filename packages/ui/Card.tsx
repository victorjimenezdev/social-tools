import React, { type Key, type ReactElement } from 'react';

export interface CardProps {
  href: string;
  icon: ReactElement;
  title: string;
  blurb: string;
  key?: Key;
}

export function Card({ href, icon, title, blurb }: CardProps) {
  return (
    <a
      href={href}
      aria-label={`Open ${title}`}
      className="rounded-xl border border-stroke/50 bg-surfaceAlt p-4 shadow-card transition hover:shadow-lg flex gap-3"
    >
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: "w-6 h-6 text-accent",
      })}
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-muted">{blurb}</p>
      </div>
    </a>
  );
}
