import React from 'react';
import { AdSlot } from '@ads/index';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';
import { Card } from '@ui/Card';
import { buttonVariants } from '@ui/components/Button';
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
      <section className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Free TikTok & Instagram Tools
        </h1>
        <p className="mt-4 text-lg text-[#4b5563]">
          Tools for TikTok and Instagram: fancy text, bio ideas, challenge spinner, grid splitter and more.
        </p>
        <a href="#tools" className={`${buttonVariants({})} mt-6 inline-block`}>
          Browse tools
        </a>
      </section>

      <section
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
