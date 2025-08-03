import FancyGenerator from './fancy-generator';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';
import ToolShell from '../../../components/ToolShell';

const tool = tools.find((t) => t.slug === 'fancy-text');
if (!tool) throw new Error('Tool not found');

export const metadata = metadataFor({
  title: tool.title,
  description: tool.blurb,
});

export default function Page() {
  return (
    <ToolShell
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: tool.title, href: '' },
      ]}
    >
      <FancyGenerator />
    </ToolShell>
  );
}
