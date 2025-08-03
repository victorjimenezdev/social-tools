import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from './Section';

describe('Section', () => {
  it('renders correct number of layer stacks', () => {
    const { rerender } = render(<Section>content</Section>);
    expect(screen.queryAllByTestId('layer-stack')).toHaveLength(0);

    rerender(<Section edgeTop>content</Section>);
    expect(screen.getAllByTestId('layer-stack')).toHaveLength(1);

    rerender(
      <Section edgeTop edgeBottom>
        content
      </Section>
    );
    expect(screen.getAllByTestId('layer-stack')).toHaveLength(2);
  });
});
