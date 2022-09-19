const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    plugins: [new VueLoaderPlugin()],
    module: {
      rules: [
        { test: /\.js$/, use: "babel-loader" },
        { test: /\.vue$/, use: "vue-loader" },
      ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            '@': path.resolve(__dirname, './src')
        },
        extensions: ["*", ".js", ".vue", ".json"]
    }
  };