import React, { type JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@ui/Icon';
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
      icon: <Icon as={FontAwesomeIcon} icon={faWandMagicSparkles} />,
  },
  {
    slug: 'bio-caption-ideas',
    title: 'Bio Caption Ideas',
    blurb: 'Get random bio captions',
      icon: <Icon as={FontAwesomeIcon} icon={faLightbulb} />,
  },
  {
    slug: 'challenge-spinner',
    title: 'Challenge Spinner',
    blurb: 'Spin for random challenges',
      icon: <Icon as={FontAwesomeIcon} icon={faBullseye} />,
  },
  {
    slug: 'grid-splitter',
    title: 'Grid & Panorama Splitter',
    blurb: 'Split images into grids or panoramas',
      icon: <Icon as={FontAwesomeIcon} icon={faTableCellsLarge} />,
  },
  {
    slug: 'profile-pic-viewer',
    title: 'Instagram Profile Pic Viewer',
    blurb: 'View full-size profile pics',
      icon: <Icon as={FontAwesomeIcon} icon={faUser} />,
  },
  {
    slug: 'story-templates',
    title: 'Story Template Maker',
    blurb: 'Create bingo story templates',
      icon: <Icon as={FontAwesomeIcon} icon={faFileLines} />,
  },
  {
    slug: 'username-checker',
    title: 'TikTok Username Checker',
    blurb: 'Check TikTok username availability',
      icon: <Icon as={FontAwesomeIcon} icon={faMagnifyingGlass} />,
  },
];

export default tools;
