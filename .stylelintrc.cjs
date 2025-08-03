module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
  ],
  plugins: ['@double-great/stylelint-a11y'],
  rules: {
    'a11y/no-outline-none': true,
    'a11y/media-prefers-color-scheme': true,
  },
};
