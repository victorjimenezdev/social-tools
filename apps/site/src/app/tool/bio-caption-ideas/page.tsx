import BioCaptionIdeas from './bio-caption-ideas';
import { getBioIdeas } from '@lib/mdx';
import { metadataFor } from '@lib/seo';

export const dynamic = 'force-static';

export const metadata = metadataFor({
  title: 'Bio Caption Ideas',
  description: 'Generate random bio captions with optional category filters.',
});

export default async function Page() {
  const categories = await getBioIdeas();
  return <BioCaptionIdeas categories={categories} />;
}
