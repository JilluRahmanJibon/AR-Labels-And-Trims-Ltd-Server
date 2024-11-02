// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { files: [ "**/*.{js,mjs,cjs,ts}" ] },
  { files: [ "**/*.js" ], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error"
    },
  },
  {
    globals: {
      process: "readonly"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];