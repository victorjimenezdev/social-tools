import React, { type JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles,
  faLightbulb,
  faBullseye,
  faTableCellsLarge,
  faUser,
  faFileLines,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

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
      icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
  },
  {
    slug: 'bio-caption-ideas',
    title: 'Bio Caption Ideas',
    blurb: 'Get random bio captions',
      icon: <FontAwesomeIcon icon={faLightbulb} />,
  },
  {
    slug: 'challenge-spinner',
    title: 'Challenge Spinner',
    blurb: 'Spin for random challenges',
      icon: <FontAwesomeIcon icon={faBullseye} />,
  },
  {
    slug: 'grid-splitter',
    title: 'Grid & Panorama Splitter',
    blurb: 'Split images into grids or panoramas',
      icon: <FontAwesomeIcon icon={faTableCellsLarge} />,
  },
  {
    slug: 'profile-pic-viewer',
    title: 'Instagram Profile Pic Viewer',
    blurb: 'View full-size profile pics',
      icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    slug: 'story-templates',
    title: 'Story Template Maker',
    blurb: 'Create bingo story templates',
      icon: <FontAwesomeIcon icon={faFileLines} />,
  },
  {
    slug: 'username-checker',
    title: 'TikTok Username Checker',
    blurb: 'Check TikTok username availability',
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
];

export default tools;
