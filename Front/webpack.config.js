module.exports={
	devtool: 'source-map',
	entry: [
	'./client/index.jsx'
	],
	module:{
		loaders:[
			{
			test:/(\.js|\.jsx)$/,
			loader: 'babel-loader',
			exclude:/node_modules/,
			query: {presets:['es2015','react']}
			}
		]
	},
	output:{
		filename: "index_bundle.js",
		path:__dirname+'/dist'
	}
}