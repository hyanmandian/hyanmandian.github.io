const path = require("path");
const glob = require("glob");

const { dist } = require("./config");

module.exports = {
  plugins: [
    require("cssnano")(),
    require("postcss-import")(),
    require("postcss-normalize")(),
    require("postcss-preset-env")({
      browsers: ["last 2 versions"],
    }),
    require("@fullhuman/postcss-purgecss")({
      content: glob.sync(path.resolve(dist, "**", "*.html")),
      whitelist: ["theme-switcher"],
    }),
  ],
};
