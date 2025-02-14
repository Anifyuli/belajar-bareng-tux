import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("@repo/eslint-config/react-internal.js"), {
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.lint.json",
            tsconfigRootDir: "/home/anifyuli/Developments/Web/projects/belajar-bareng-tux/packages/ui",
        },
    },
}, {
    files: ["**/postcss.config.mjs"],

    rules: {
        "@typescript-eslint/no-var-requires": "off",
    },
}];