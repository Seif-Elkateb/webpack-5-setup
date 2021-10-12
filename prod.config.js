const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports={
  entry:'./src/client/app.js',
  mode:'production',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].[contenthash].js',
  },
  optimization:{
    minimizer:[new CssMinimizerPlugin(),new TerserPlugin()],
 },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/client/views/index.html',
      filename: 'index.[contenthash].html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'style/style.[contenthash].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.scss$/,
        use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
      }
    ]
  }
}
