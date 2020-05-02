const rss = require("@11ty/eleventy-plugin-rss");
const htmlMinifier = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const { src, dist } = require("./config");

module.exports = function (config) {
  config.addPlugin(rss);
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy({ [`${src}/assets/images`]: "images" });

  config.addTransform("minify-html", function (content, outputPath) {
    if (!outputPath.endsWith(".html")) return content;

    return htmlMinifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    });
  });

  return {
    dir: {
      input: src,
      output: dist,
      includes: "includes",
      layouts: "includes/layouts",
    },
  };
};
