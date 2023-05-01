const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new MiniCssExtractPlugin({
			filename: 'main.css'
		})
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
				test: /\.module\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 
                    // опции для изоляции стилей: каждому классу будет добавлен хеш код
                    // применится для всех файдов с именем module
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]__[sha1:hash:hex:7]'
							}
						}
					}
				]
			},
            {
				test: /^((?!\.module).)*css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
        ]
    },
    resolve: {
        // pass all js files through Babel
        extensions: ["*", ".js", ".jsx"]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000
    }
};