const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        transportMode: "ws"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader"]
        }, 
        {
            test: /\.s(c|a)ss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                // Requires sass-loader@^7.0.0
                options: {
                  implementation: require('sass'),
                  indentedSyntax: true // optional
                },
                // Requires >= sass-loader@^8.0.0
                options: {
                  implementation: require('sass'),
                  sassOptions: {
                    indentedSyntax: true // optional
                  },
                },
              },
            ],
          },
    ]
    }
});