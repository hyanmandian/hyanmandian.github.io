const svg = require("rollup-plugin-svg");
const path = require("path");
const alias = require("rollup-plugin-alias");
const postcss = require("rollup-plugin-postcss");
const { terser } = require("rollup-plugin-terser");

const { src, dist } = require("./config");

module.exports = {
  input: path.resolve(src, "assets", "scripts", "index.js"),
  output: {
    dir: path.resolve(dist, "assets"),
    format: "es",
    freeze: false,
    sourcemap: true,
    chunkFileNames: "[name].[hash].js",
  },
  treeshake: {
    propertyReadSideEffects: false,
  },
  plugins: [
    svg(),
    alias({
      resolve: [".js", ".svg", ".css"],
      entries: {
        "#": path.resolve(src, "assets"),
      },
    }),
    terser({
      sourcemap: true,
      output: { comments: false },
      compress: {
        keep_infinity: true,
        pure_getters: true,
        passes: 10,
      },
      ecma: 5,
      warnings: true,
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      config: {
        path: path.resolve(__dirname, "postcss.config.js"),
      },
    }),
  ],
};
