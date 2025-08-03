import * as React from 'react';
import { LayerStack } from './LayerStack';

interface SectionProps {
  id?: string;
  edgeTop?: boolean;
  edgeBottom?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Section({
  id,
  edgeTop,
  edgeBottom,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      {edgeTop && <LayerStack direction="top" />}
      {children}
      {edgeBottom && <LayerStack direction="bottom" />}
    </section>
  );
}

export default Section;
