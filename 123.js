/*const config = {
	entry:{
		main:'./src/index.js'
	},
	output:{
		filename: 'bundle.js',
		path: '/WebPack/webpack-demo/dist'
	}
}
module.exports = config;
rule--����
loader--װ�ػ�
parser--������
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//模块热更新
const webpack = require('webpack');

module.exports={
	//entry:'./src/index.js',
	entry:{
		app:'./src/index.js',
		print:'./src/print.js'
	},
	output:{
		filename:'[name].[hash].js',
		path:path.resolve(__dirname,'dist'),
	},
	resolve:{
		modules:['node_modules'],
		extensions:['.js','.css','scss']
	},
	module:{
		rules:[
			{
				test:/\.(scss|css)$/,
				use:['style-loader','css-loader'],
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[ 'file-loader'],
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:['file-loader'],
			}
		]
	},
	plugins:[ 
		new HtmlWebpackPlugin({
			title:'HtmlWebpackPlugin'
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase:'./dist'	,
		hot:true
	}
	//devtool:'inline-source-map'
};
