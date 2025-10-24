import js from "@eslint/js";
import html from "eslint-plugin-html";

const browserGlobals = {
  window: "readonly",
  document: "readonly",
  console: "readonly",
  localStorage: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  clearInterval: "readonly",
  requestAnimationFrame: "readonly",
  Image: "readonly",
  fetch: "readonly",
  Blob: "readonly",
  URL: "readonly",
  AbortController: "readonly",
  Event: "readonly",
  FileReader: "readonly",
  navigator: "readonly",
  getComputedStyle: "readonly",
};

const libraryGlobals = {
  L: "readonly",
  proj4: "readonly",
  html2canvas: "readonly",
  jsPDF: "readonly",
  mgrs: "readonly",
};

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,html}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...browserGlobals,
        ...libraryGlobals,
      },
    },
    rules: {
      "no-console": "off",
      "no-undef": "error",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-empty": [
        "warn",
        {
          allowEmptyCatch: true,
        },
      ],
      "no-unused-vars": [
        "warn",
        { args: "none", ignoreRestSiblings: true, varsIgnorePattern: "^unused" },
      ],
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      html,
    },
  },
];
