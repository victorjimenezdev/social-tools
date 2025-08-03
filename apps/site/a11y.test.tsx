import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import HomePage from './src/app/page';
import FancyTextPage from './src/app/tool/fancy-text/page';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(): R;
    }
  }
}

describe('a11y', () => {
  it('home page has no accessibility violations', async () => {
    const { container } = render(<HomePage />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('fancy text tool has no accessibility violations', async () => {
    const { container } = render(<FancyTextPage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
