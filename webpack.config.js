"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './src/index',
	externals,
	output: {
		path: `${__dirname}/bundle`,
		filename: 'matreshka-binders-file.min.js',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel']
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
	]
};
