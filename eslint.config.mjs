import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable import rules enforcing ESM
      "import/no-commonjs": "off",
      "import/extensions": "off",
      // Disable prefer-import/prefer-export if set
      "prefer-import/prefer-export": "off",
    },
  },
];

export default eslintConfig;
