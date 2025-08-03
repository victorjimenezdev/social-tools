import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeatureCard } from './FeatureCard';

const Icon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx={12} cy={12} r={10} />
  </svg>
);

describe('FeatureCard', () => {
  it('renders light mode snapshot', () => {
    const { asFragment } = render(
      <FeatureCard icon={Icon} title="Sample">
        Content
      </FeatureCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders dark mode snapshot', () => {
    const { asFragment } = render(
      <div className="dark">
        <FeatureCard icon={Icon} title="Sample">
          Content
        </FeatureCard>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
