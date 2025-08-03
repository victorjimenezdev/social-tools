import * as React from 'react';
import type { ComponentType } from 'react';
import clsx from 'clsx';

export interface IconProps {
  as: ComponentType<any>;
  className?: string;
  [key: string]: any;
}

export function Icon({ as: Component, className, ...props }: IconProps) {
  return (
    <Component
      className={clsx('w-5 h-5 md:w-6 md:h-6 shrink-0 text-accent', className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Icon;
