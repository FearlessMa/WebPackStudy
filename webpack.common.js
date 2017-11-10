//node.js API 路径  node中引入模块用require
const path = require('path');
//webpack插件 用于自动生成html页面，默认值index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//webpack插件 用于清理上一次生成的文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
	//入口配置
	entry:{
		//path.join(__dirname。。。 拼接一个路径 __dirname绝对路径到当前文件所在的位置  npm 运行node a.js 查看详情
		main:path.join(__dirname,'/src/index.js')
	},
	//输出文件
	output:{
		//文件名称
		filename:'[name].[hash].js',
		//打包后文件输出路径
		path:path.resolve(__dirname,'dist')
	},
	//用于解析省略后缀的文件
	resolve:{
		//文件优先搜索的目录
		modules:['node_modules'],
		//自动解析确定的扩展
		extensions:['.js','.css','scss']
	},
		//模块解析
	module:{
		//规则
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
	//插件
	plugins:[
		//清楚上次打包文件
		new CleanWebpackPlugin(['dist']),
		//自动生成html页面
		new HtmlWebpackPlugin({
			title:'HtmlWebpackPlugin'
		})
	]
}