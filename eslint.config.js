import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        chrome: "readonly", // Add `chrome` as a global variable
      },
    },
    rules: {
      // Add any custom rules here if needed
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
];
