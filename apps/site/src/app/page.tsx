import React from 'react';
import { AdSlot } from '@ads/index';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';
import { Card } from '@ui/Card';
import { Section } from '@ui/Section';
import { Hero } from '@ui/Hero';
import { FeatureCard } from '@ui/FeatureCard';
import type { Metadata } from 'next';

const meta = metadataFor({
  title: 'Free TikTok & Instagram Tools',
  description:
    'Browse free TikTok & Instagram tools: fancy text, caption ideas, challenge spinner, grid splitter, profile viewer, story templates, and username checker.',
});

export const metadata: Metadata = {
  ...meta,
  alternates: { canonical: '/' },
  openGraph: { ...meta.openGraph, url: '/' },
};

export default function Page() {
  const features = [
    {
      title: 'No log-in',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
      description: 'Use tools instantly without creating an account.',
    },
    {
      title: '100% Free',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 3v18" />
          <path d="M16 7h-4a3 3 0 000 6h2a3 3 0 010 6H8" />
        </svg>
      ),
      description: 'Enjoy all tools at no cost.',
    },
    {
      title: 'Mobile First',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
      description: 'Optimized for your phone.',
    },
    {
      title: 'Open Source',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M8 9l-4 3 4 3" />
          <path d="M16 9l4 3-4 3" />
        </svg>
      ),
      description: 'Transparent and community-driven.',
    },
    {
      title: 'Privacy Friendly',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 3l8 4v5c0 5-3 9-8 11-5-2-8-6-8-11V7l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      description: 'We respect your privacy.',
    },
    {
      title: 'Dark Mode',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ),
      description: 'Looks great in light or dark.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `/tool/${tool.slug}`,
      name: tool.title,
    })),
  };

  return (
    <>
      <Hero
        title="Free TikTok & Instagram Tools"
        subtitle="Tools for TikTok and Instagram: fancy text, bio ideas, challenge spinner, grid splitter and more."
        cta={{ href: '#tools', label: 'Browse tools' }}
        imageAlt="App screenshots on phones"
      />

      <Section id="features" className="py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">Why choose us</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        id="tools"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {tools.slice(0, 3).map((tool) => (
          <Card
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            icon={tool.icon}
            title={tool.title}
            blurb={tool.blurb}
          />
        ))}
        <div className="col-span-full hidden md:flex justify-center">
          <AdSlot />
        </div>
        {tools.slice(3).map((tool) => (
          <Card
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            icon={tool.icon}
            title={tool.title}
            blurb={tool.blurb}
          />
        ))}
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
