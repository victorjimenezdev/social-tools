import React from "react";
import { AdSlot } from '@ads/index';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';
import type { Metadata } from 'next';

const meta = metadataFor({
  title: 'Social Tools Hub',
  description: 'Explore free utilities for your social media posts.',
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
      <h1 className="mb-4 text-3xl font-bold">Social Tools Hub</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.slice(0, 3).map((tool) => (
          <a
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            role="link"
            className="block rounded border p-4 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{tool.blurb}</p>
          </a>
        ))}
        <div className="col-span-full flex justify-center">
          <AdSlot />
        </div>
        {tools.slice(3).map((tool) => (
          <a
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            role="link"
            className="block rounded border p-4 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{tool.blurb}</p>
          </a>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
