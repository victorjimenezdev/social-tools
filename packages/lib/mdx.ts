import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileMDX } from 'next-mdx-remote/rsc';

export interface BioIdeaCategory {
  category: string;
  ideas: string[];
}

async function loadMdxFrontmatter<T>(filePath: string): Promise<T> {
  const source = await fs.readFile(filePath, 'utf8');
  const { frontmatter } = await compileMDX<T>({
    source,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
}

export async function getBioIdeas(): Promise<BioIdeaCategory[]> {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dir = path.join(__dirname, '../../content/bio');
  const files = await fs.readdir(dir);
  const categories: BioIdeaCategory[] = [];
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const frontmatter = await loadMdxFrontmatter<{ ideas: string[] }>(
      path.join(dir, file),
    );
    categories.push({
      category: file.replace(/\.mdx$/, ''),
      ideas: frontmatter.ideas ?? [],
    });
  }
  return categories;
}
