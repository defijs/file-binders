module.exports = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: `${__dirname}/bundle`,
		filename: 'file-binders.min.js',
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
