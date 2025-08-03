import type { Preview } from '@storybook/react';
import '../apps/site/src/app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  },
};

export default preview;
