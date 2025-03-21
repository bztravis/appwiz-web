import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintReact from "@eslint-react/eslint-plugin";
import pluginQuery from '@tanstack/eslint-plugin-query'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintReact.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
];

eslintConfig.push({
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@eslint-react/dom/no-missing-button-type": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
  }
})

export default eslintConfig;
