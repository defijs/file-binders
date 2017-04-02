"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: `${__dirname}/bundle`,
		filename: 'matreshka-binders-file.min.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
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
