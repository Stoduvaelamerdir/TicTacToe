const path = require('path');
module.exports = {  
	entry: './src/client/index.js',  
	output: {    
		filename: 'main.js',    
		path: path.resolve(__dirname, 'dist')  
	},
	plugins: [
  		

  	],
	devServer: {    
		port: 3000,    
		open: true,    
		proxy: {      
			"/api": "http://localhost:8080"    
	}}
}