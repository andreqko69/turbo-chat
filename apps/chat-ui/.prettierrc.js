import prettierConfig from '@repo/prettier-config';

export default {
  ...prettierConfig,
  plugins: [...prettierConfig.plugins, 'prettier-plugin-tailwindcss'],
};
