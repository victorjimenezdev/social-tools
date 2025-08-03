import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeatureCard } from './FeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Icon = <FontAwesomeIcon icon={faCircle} />;

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
