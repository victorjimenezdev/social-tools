import GridSplitter from './grid-splitter';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';

const tool = tools.find((t) => t.slug === 'grid-splitter');
if (!tool) throw new Error('Tool not found');

export const metadata = metadataFor({
  title: tool.title,
  description: tool.blurb,
});

export default function Page() {
  return <GridSplitter />;
}
