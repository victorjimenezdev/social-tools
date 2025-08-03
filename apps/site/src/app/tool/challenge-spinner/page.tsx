import ChallengeSpinner from './challenge-spinner';
import challenges from '../../../../../../data/challenges.json';
import { metadataFor } from '@lib/seo';

export const dynamic = 'force-static';

export const metadata = metadataFor({
  title: 'Challenge Spinner',
  description: 'Spin to receive a random challenge.',
});

export default function Page() {
  return <ChallengeSpinner challenges={challenges} />;
}
