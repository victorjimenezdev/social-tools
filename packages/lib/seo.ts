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

export default metadataFor;
