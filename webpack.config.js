
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: './src/scripts/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	mode: 'development',

	module: {

		rules: [
			
			{

				test: /\.js$/,

				use: {

					loader: 'babel-loader',

					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}

			},

			{
				test: /\.scss$/,

				use: [
						{
							loader: MiniCssExtractPlugin.loader, 
							options: {
								//here is options
							}
						},

					// Translates CSS into CommonJS
					'css-loader',

					// Compiles Sass to CSS
          			'sass-loader',
				]	
			}
		]
	},

	plugins: [

		new MiniCssExtractPlugin({

			 filename: '[name].css',

      		 chunkFilename: '[id].css',
		}),

		new HtmlWebpackPlugin({

			template: './index.html'
		})
	]
}



