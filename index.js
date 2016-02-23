module.exports = {
  presets: [
    require("babel-preset-es2015"),
    require("babel-preset-react")
  ],
  plugins: [
    require("babel-plugin-transform-export-extensions"),
    require("babel-plugin-transform-class-properties")
  ]
};
