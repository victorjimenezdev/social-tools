import ChallengeSpinner from './challenge-spinner';
import challenges from '../../../../../../data/challenges.json';
import { metadataFor } from '@lib/seo';
import { tools } from '@lib/tools';
import ToolShell from '../../../components/ToolShell';

export const dynamic = 'force-static';

const tool = tools.find((t) => t.slug === 'challenge-spinner');
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
      <ChallengeSpinner challenges={challenges} />
    </ToolShell>
  );
}
