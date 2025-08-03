import StoryTemplates from './story-templates';
import { metadataFor } from '@lib/seo';

export const dynamic = 'force-static';

export const metadata = metadataFor({
  title: 'Story Template Maker',
  description: 'Build and download custom bingo story templates.',
});

export default function Page() {
  return <StoryTemplates />;
}
