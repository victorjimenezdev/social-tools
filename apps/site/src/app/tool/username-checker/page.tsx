import UsernameChecker from './username-checker';
import { metadataFor } from '@lib/seo';

export const metadata = metadataFor({
  title: 'TikTok Username Checker',
  description: 'Check if a TikTok username is available and get suggestions.',
});

export default function Page() {
  return <UsernameChecker />;
}
