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
        'rounded-2xl border border-accent/20 shadow-card bg-surfaceAlt p-6 transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-dark-surfaceAlt dark:border-dark-accent/20',
        className
      )}
    >
      <div className="mb-4 h-6 w-6 text-accent" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="text-sm text-text dark:text-dark-text">{children}</div>
    </div>
  );
}

export default FeatureCard;
