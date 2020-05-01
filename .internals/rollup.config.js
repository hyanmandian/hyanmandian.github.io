const path = require("path");

const { src, dist } = require("./config");

module.exports = {
  input: path.resolve(src, "assets", "scripts", "index.js"),
  output: {
    dir: path.resolve(dist, "scripts"),
    format: "es",
  },
};
