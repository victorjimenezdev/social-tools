import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    href: '#',
    icon: <Icon as={FontAwesomeIcon} icon={faWandMagicSparkles} />,
    title: 'Fancy Text Generator',
    blurb: 'Style your captions',
  },
};
