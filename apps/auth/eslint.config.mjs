import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import baseConfig from '@repo/eslint-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = Array.isArray(baseConfig) ? baseConfig : [baseConfig];

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...config,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
