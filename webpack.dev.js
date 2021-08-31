const path = require("path");
const webpack = require("webpack")
const HtmlWebPackPLugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',
        clean: true, // Clean the output directory before emit.
    },
    module: {
        rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                    },
                    {
                        test: /\.scss$/,
                        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                    }
                ]
    },
    plugins: [
        new HtmlWebPackPLugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
}