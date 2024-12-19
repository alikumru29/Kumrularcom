/** @type {import('i18next-scanner').Config} */
export default {
  input: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.test.{js,jsx,ts,tsx}",
    "!src/i18n/**",
    "!**/node_modules/**",
  ],
  output: "./src/i18n",
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ["t", "i18next.t", "i18n.t"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    trans: {
      component: "Trans",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    lngs: ["tr"],
    defaultLng: "tr",
    defaultNs: "common",
    defaultValue: "",
    resource: {
      loadPath: "src/i18n/{{lng}}/{{ns}}.json",
      savePath: "src/i18n/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: ":",
    keySeparator: ".",
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
};
