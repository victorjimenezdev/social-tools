import GridSplitter from './grid-splitter';
import { metadataFor } from '@lib/seo';

export const metadata = metadataFor({
  title: 'Grid & Panorama Splitter',
  description: 'Split an image into grids or panorama tiles and download as a ZIP.',
});

export default function Page() {
  return <GridSplitter />;
}
