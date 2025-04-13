import globals from 'globals';
import { globalIgnores } from 'eslint/config';
import baseConfig from '@repo/eslint-config';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  globalIgnores(['src/lib/db/generated/*']),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
