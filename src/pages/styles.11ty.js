const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssNormalize = require("postcss-normalize");
const postcssPresetEnv = require("postcss-preset-env");
const cssNano = require("cssnano");

module.exports = class Styles {
  data() {
    return {
      permalink: "assets/styles/index.css",
    };
  }

  async render() {
    const from = path.resolve(__dirname, "..", "assets", "styles", "index.css");
    const file = fs.readFileSync(from);

    const { css } = await postcss([
      postcssImport(),
      postcssPresetEnv(),
      postcssNormalize(),
      cssNano(),
    ]).process(file, { from });

    return css;
  }
};
