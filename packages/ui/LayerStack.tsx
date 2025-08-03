import * as React from 'react';

interface LayerStackProps {
  direction: 'top' | 'bottom';
  className?: string;
}

export function LayerStack({ direction, className }: LayerStackProps) {
  const isTop = direction === 'top';
  const rounded = isTop
    ? ['rounded-t-lg', 'rounded-t-md', 'rounded-t-sm']
    : ['rounded-b-lg', 'rounded-b-md', 'rounded-b-sm'];
  const position = isTop ? 'top-0' : 'bottom-0';

  return (
    <div
      className={`relative h-[10px] w-full ${className ?? ''}`.trim()}
      data-testid="layer-stack"
    >
      <div
        className={`absolute inset-x-0 ${position} h-[10px] bg-primary ${rounded[0]}`}
      />
      <div
        className={`absolute inset-x-0 ${position} h-[6px] bg-accent/10 ${rounded[1]}`}
      />
      <div
        className={`absolute inset-x-0 ${position} h-[3px] bg-muted ${rounded[2]}`}
      />
    </div>
  );
}

export default LayerStack;
