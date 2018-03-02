const { resolve } = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

const babel = {
	test: /.jsx?$/,
	use: [
		{
			loader: 'babel-loader',
			options: {
				presets: ['env', 'react'],
                plugins: [
                    ['transform-object-rest-spread', { "useBuiltIns": true }],
                ],
			},
		},
	],
};

const sass = {
	test: /.(s[ac]ss|css)$/,
	use: extractSass.extract({
		use: [{
			loader: "css-loader"
		}, {
			loader: "sass-loader"
		}],
		fallback: "style-loader"
	})
};


module.exports = {
	entry: ['babel-polyfill', './src/front/entry.js'],

	output: {
		path: resolve('./build'),
		filename: 'bundle.js',
	},

	module: {
		rules: [babel, sass],
	},

    resolve: {
        modules: [resolve('src/front'), 'node_modules', ],
        extensions: [ '.js', '.jsx', '.json' ],
    },

	plugins: [
		extractSass
	],
};
