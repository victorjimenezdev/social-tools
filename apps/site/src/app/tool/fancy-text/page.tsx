import FancyGenerator from './fancy-generator';
import { metadataFor } from '@lib/seo';

export const metadata = metadataFor({
  title: 'Fancy Text Generator',
  description: 'Convert text into bold or italic Unicode styles.',
});

export default function Page() {
  return <FancyGenerator />;
}
