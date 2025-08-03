import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../Hero';

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Hero',
};
export default meta;

export const Default: StoryObj<typeof Hero> = {};
