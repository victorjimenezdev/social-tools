import React from "react";
import type { Metadata } from "next";

interface Options {
  title: string;
  description: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function metadataFor({ title, description }: Options): Metadata {
  const slug = slugify(title);
  const url = `/tool/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbLd(items: BreadcrumbItem[]) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default metadataFor;
