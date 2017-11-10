
//merge用于合并webpack.config.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//引入webpack模块 使用代码热更新
const webpack = require('webpack');
module.exports=merge(common,{
	devtool:'inline-source-map',
	//dev server 使用的目录
	devServer:{
		contentBase:'./dist'
	},
	//热更新的插件
	plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
});