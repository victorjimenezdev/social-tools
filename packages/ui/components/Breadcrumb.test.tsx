import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Tool' },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
