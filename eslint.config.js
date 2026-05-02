import pluginVue from "eslint-plugin-vue";
import prettierConfig from "@vue/eslint-config-prettier";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  ...pluginVue.configs["flat/essential"],
  prettierConfig,
];
