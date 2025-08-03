import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { Hero } from './Hero';

vi.mock('next/image', () => {
  return {
    default: (props: any) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img {...props} />;
    },
  };
});

describe('Hero', () => {
  afterEach(() => cleanup());
  it('renders image alt text', () => {
    render(
      <Hero
        title="Title"
        subtitle="Subtitle"
        cta={{ href: '/cta', label: 'Call to action' }}
        imageAlt="Phones"
      />
    );
    expect(screen.getByAltText('Phones')).toBeTruthy();
  });

  it('has non-empty CTA link href', () => {
    render(
      <Hero
        title="Title"
        subtitle="Subtitle"
        cta={{ href: '/cta', label: 'Call to action' }}
        imageAlt="Phones"
      />
    );
    const link = screen.getByRole('link', { name: 'Call to action' });
    expect(link.getAttribute('href')).toBeTruthy();
  });
});
