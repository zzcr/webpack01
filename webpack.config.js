'use strict'
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
	entry:{
		Index:['./src/js/index.js']
	},
	output:{
		path:path.resolve(__dirname,'./dist/static'),
		publicPath:'static/',
		filename:'[name].[chunkhash].js'
	},
	resolve:{
		extensions:['','js','css','swig']
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader: ExtractTextPlugin.extract('style', ['css'])
			},
			{
				test:/\.scss$/,
				loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
			},
			{
				test:/\.swig$/,
				loader:'swig'
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			chunks:['Index'],
			filename:'../index.html',
			template:'./src/tpl/index.swig',
			inject:true
		}),
		new ExtractTextPlugin('[name].[chunkhash].css')
	]
}