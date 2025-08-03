export interface Tool {
  slug: string;
  title: string;
  blurb: string;
}

export const tools: Tool[] = [
  { slug: 'fancy-text', title: 'Fancy Text Generator', blurb: 'Style your captions' },
  { slug: 'bio-caption-ideas', title: 'Bio Caption Ideas', blurb: 'Get random bio captions' },
  { slug: 'challenge-spinner', title: 'Challenge Spinner', blurb: 'Spin for random challenges' },
  { slug: 'grid-splitter', title: 'Grid & Panorama Splitter', blurb: 'Split images into grids or panoramas' },
  { slug: 'profile-pic-viewer', title: 'Instagram Profile Pic Viewer', blurb: 'View full-size profile pics' },
  { slug: 'story-templates', title: 'Story Template Maker', blurb: 'Create bingo story templates' },
  { slug: 'username-checker', title: 'TikTok Username Checker', blurb: 'Check TikTok username availability' },
];

export default tools;
