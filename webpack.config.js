const path = require('path');

const webpackConfig = {
	entry: {
		main: path.resolve(__dirname, './src/js/main.js'),
		react: path.resolve(__dirname, './src/js/react.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public/js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
			 		'style-loader',
			 		'css-loader'
				]
			}
		]
	}
};

module.exports = webpackConfig;