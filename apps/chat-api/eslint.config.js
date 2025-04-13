import baseConfig from '@repo/eslint-config';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';

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
