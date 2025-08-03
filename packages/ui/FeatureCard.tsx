import * as React from 'react';
import { cx } from 'class-variance-authority';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export function FeatureCard({ icon, title, children, className }: FeatureCardProps) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-accent/20 shadow-card bg-surfaceAlt p-4 transition-transform hover:-translate-y-1 hover:shadow-md dark:bg-dark-surfaceAlt dark:border-dark-accent/20',
        className
      )}
    >
      <div className="mb-2 h-5 w-5 text-accent" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-1 text-base font-semibold">{title}</h3>
      <div className="text-sm text-text dark:text-dark-text">{children}</div>
    </div>
  );
}

export default FeatureCard;
