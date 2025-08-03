import React from 'react';

export interface Tool {
  slug: string;
  title: string;
  blurb: string;
  icon: JSX.Element;
}

export const tools: Tool[] = [
  {
    slug: 'fancy-text',
    title: 'Fancy Text Generator',
    blurb: 'Style your captions',
    icon: <span aria-hidden="true">✨</span>,
  },
  {
    slug: 'bio-caption-ideas',
    title: 'Bio Caption Ideas',
    blurb: 'Get random bio captions',
    icon: <span aria-hidden="true">💡</span>,
  },
  {
    slug: 'challenge-spinner',
    title: 'Challenge Spinner',
    blurb: 'Spin for random challenges',
    icon: <span aria-hidden="true">🎯</span>,
  },
  {
    slug: 'grid-splitter',
    title: 'Grid & Panorama Splitter',
    blurb: 'Split images into grids or panoramas',
    icon: <span aria-hidden="true">🖼️</span>,
  },
  {
    slug: 'profile-pic-viewer',
    title: 'Instagram Profile Pic Viewer',
    blurb: 'View full-size profile pics',
    icon: <span aria-hidden="true">👤</span>,
  },
  {
    slug: 'story-templates',
    title: 'Story Template Maker',
    blurb: 'Create bingo story templates',
    icon: <span aria-hidden="true">📄</span>,
  },
  {
    slug: 'username-checker',
    title: 'TikTok Username Checker',
    blurb: 'Check TikTok username availability',
    icon: <span aria-hidden="true">🔍</span>,
  },
];

export default tools;
