"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: `${__dirname}/bundle`,
		filename: "matreshka-binders-file.min.js"
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

	]
};
