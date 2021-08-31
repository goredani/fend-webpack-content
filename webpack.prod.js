const path = require("path");
const webpack = require("webpack")
const HtmlWebPackPLugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
                    {
                        test: '/\.js$/',
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.css$/i,
                        use: [MiniCssExtractPlugin.loader, "css-loader"],
                    },
                    {
                        test: /.s?css$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                    }

                ]
    },
    plugins: [
        new HtmlWebPackPLugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin(),
        new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          `...`,
          new CssMinimizerPlugin()
        ],
    }
}