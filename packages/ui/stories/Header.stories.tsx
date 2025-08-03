import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default meta;

export const Default: StoryObj<typeof Header> = {
  args: { pathname: '/' },
};
