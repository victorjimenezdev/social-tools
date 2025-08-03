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
      className="flex items-center justify-start gap-3 rounded-xl border border-stroke/50 bg-surfaceAlt p-4 shadow-card transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent sm:gap-4 sm:p-6"
    >
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: "w-6 h-6 text-accent flex-shrink-0",
      })}
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg md:text-xl">{title}</h2>
        <p className="text-sm text-muted md:text-base">{blurb}</p>
      </div>
    </a>
  );
}
