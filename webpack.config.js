const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const config={
    ///////this two requirement is neccessory
    ///dist also work for building bundle.js
  entry:"./src/index.js",
  output:{
      path:path.resolve(__dirname,'build'),
      filename:'bundle.js'
  },
  ////preproccessing step for loader
  module:{
      rules:[
          {
              use:'babel-loader',
              test:/\.js$/
          },
          {
             use:ExtractTextPlugin.extract({
                 use:'css-loader'
             }),
             test:/\.css$/
          }
      ]
  },
  plugins:[
      new ExtractTextPlugin('styles.css')
  ]

}

module.exports= config;