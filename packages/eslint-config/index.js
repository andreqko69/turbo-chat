import js from "@eslint/js";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierConfig from "@repo/prettier-config";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // prettier config
      "prettier/prettier": ["error", prettierConfig],
      // rules overrides
      "turbo/no-undeclared-env-vars": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-function-type": "error",
    },
  },
  {
    ignores: ["dist/**"],
  },
];
