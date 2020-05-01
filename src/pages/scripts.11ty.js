const fs = require("fs");
const path = require("path");
const rollup = require("rollup");

module.exports = class Scripts {
  data() {
    return {
      permalink: "scripts.js",
    };
  }

  render() {
    const from = path.resolve(__dirname, "..", "assets", "scripts", "index.js");
    const file = fs.readFileSync(from);

    return file;
  }
};
