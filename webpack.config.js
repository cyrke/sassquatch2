var path = require('path');

var ExtractPlugin = require('extract-text-webpack-plugin');

var PATH_ENTRY = path.resolve(__dirname, 'sass', 'sassquatch.scss');
var PATH_BUNDLE_DEST = path.resolve(__dirname, 'docs', 'templates', 'bundle');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractPlugin.extract("css!sass")
			}
		]
	},

	plugins: [
		new ExtractPlugin("sassquatch.css")
	],

	// webpack requires a js entry point
	// and bundle location
	entry: {
		sassquatch: [PATH_ENTRY]
	},
	output: {
		path: PATH_BUNDLE_DEST,
		filename: 'bundle.js'
	}
};
