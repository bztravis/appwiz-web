import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintReact from "@eslint-react/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintReact.configs.recommended,
];

eslintConfig.push({
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
  }
})

export default eslintConfig;
