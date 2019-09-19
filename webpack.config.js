const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
				test: /\.css$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader, 
						options: {
							//here is options
						}
					},

					'css-loader',
				]	
			}
		]
	},

	plugins: [

		new MiniCssExtractPlugin({

			 filename: '[name].css',

      		 chunkFilename: '[id].css',
		})
	]
}



