const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const path = require('path');

let pathsToClean = [
  'dist',
  'build'
]

// the clean options to use
let cleanOptions = {
  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false
}

module.exports = {  
	entry: './src/client/index.js',  
	output: {    
		filename: 'main.js',    
		path: path.resolve(__dirname, 'dist')  
	},
	//watch: true,
	plugins: [
  		new HtmlWebpackPlugin({
  			template: "./src/client/index.html"
  		}),
  		new CleanWebpackPlugin(pathsToClean, cleanOptions)
  	],
	devServer: {    
		port: 3000,    
		open: true,    
		proxy: {      
			"/api": "http://localhost:8080"    
	}}
}