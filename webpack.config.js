module.exports = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: `${__dirname}/bundle`,
		filename: 'matreshka-binders-file.min.js',
		libraryTarget: 'umd',
		library: 'fileBinders'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			}
		]
	}
};
