var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports={
	// entry:['./src/script/main.js','./src/script/a.js'],
	// entry:'./src/script/main.js',
	entry:'./src/app.js',
	output:{
		path:'./dist/js',
		filename:'js/[name].bundle.js'
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			loader:'babel',
			include:path.resolve(__dirname,'src'),
			exclude:path.resolve(__dirname,'node_modules'),
			query:{
				presets:['latest']
			}
		}
		]
	},
	plugins:[
	new  htmlWebpackPlugin({
		filename:'index.html',
		template:'index.html',
		inject:'body'
	})
	]


}