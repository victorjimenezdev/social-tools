import ProfilePicViewer from './profile-pic-viewer';
import { metadataFor } from '@lib/seo';

export const metadata = metadataFor({
  title: 'Instagram Profile Pic Viewer',
  description: 'View and download full-size Instagram profile pictures.',
});

export default function Page() {
  return <ProfilePicViewer />;
}

