import React from 'react';
import { AdSlot } from '@ads/index';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';
import { Card } from '@ui/Card';
import { Section } from '@ui/Section';
import { Hero } from '@ui/Hero';
import { FeatureCard } from '@ui/FeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faDollarSign,
  faMobileScreenButton,
  faCodeBranch,
  faShieldHalved,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
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
        icon: <FontAwesomeIcon icon={faLock} className="h-full w-full" />,
      description: 'Use tools instantly without creating an account.',
    },
    {
      title: '100% Free',
        icon: <FontAwesomeIcon icon={faDollarSign} className="h-full w-full" />,
      description: 'Enjoy all tools at no cost.',
    },
    {
      title: 'Mobile First',
        icon: <FontAwesomeIcon icon={faMobileScreenButton} className="h-full w-full" />,
      description: 'Optimized for your phone.',
    },
    {
      title: 'Open Source',
        icon: <FontAwesomeIcon icon={faCodeBranch} className="h-full w-full" />,
      description: 'Transparent and community-driven.',
    },
    {
      title: 'Privacy Friendly',
        icon: <FontAwesomeIcon icon={faShieldHalved} className="h-full w-full" />,
      description: 'We respect your privacy.',
    },
    {
      title: 'Dark Mode',
        icon: <FontAwesomeIcon icon={faMoon} className="h-full w-full" />,
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
        imageAlt=""
      />

      <Section id="features" className="py-12">
        <h2 className="mb-6 text-center text-2xl font-bold">Why choose us</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <section id="tools" className="container max-w-4xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
