import BioCaptionIdeas from './bio-caption-ideas';
import { getBioIdeas } from '@lib/mdx';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';

export const dynamic = 'force-static';

const tool = tools.find((t) => t.slug === 'bio-caption-ideas');
if (!tool) throw new Error('Tool not found');

export const metadata = metadataFor({
  title: tool.title,
  description: tool.blurb,
});

export default async function Page() {
  const categories = await getBioIdeas();
  return <BioCaptionIdeas categories={categories} />;
}
