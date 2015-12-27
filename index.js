module.exports = {
  preset: [
    require("babel-preset-react")
  ],
  plugins: [
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-decorators"),
    require("babel-plugin-transform-object-rest-spread")
  ]
};
