const svg = require("rollup-plugin-svg");
const path = require("path");
const alias = require("rollup-plugin-alias");

const { src, dist } = require("./config");

module.exports = {
  input: path.resolve(src, "assets", "scripts", "index.js"),
  output: {
    dir: path.resolve(dist, "scripts"),
    format: "iife",
  },
  plugins: [
    svg(),
    alias({
      resolve: [".js", ".svg"],
      entries: {
        "#": path.resolve(src, "assets"),
      },
    }),
  ],
};
