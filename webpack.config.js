const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let mode = 'development'
let target = "web"

if(process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslist"
}

module.exports = {
  mode: mode, 
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'), 
    port: 3000, 
    open: true,
    hot: true
  },
  
  //loaders
  module: {
    rules:[
      // CSS
      {
        test: /\.s?css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // Images
      {
        test: /\.(svg|ico|png|jpe?g|gif|webp)$/, 
        type: 'asset/resource'
      },

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  //plugins
  plugins: [
    new CleanWebpackPlugin(),
    
    new HtmlWebpackPlugin({
      title: 'Webpack Project', 
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html')
    }),

    new MiniCssExtractPlugin(),
  ]
}