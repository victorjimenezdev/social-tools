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
      className="tools__link"
    >
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: "tools__icon",
      })}
      <div className="tools__content">
        <h2 className="tools__title">{title}</h2>
        <p className="tools__blurb">{blurb}</p>
      </div>
    </a>
  );
}
