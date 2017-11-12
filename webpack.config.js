const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {
    entry: __dirname + "/src/index.jsx",
    output: {
      path: __dirname + '/dist',
      filename: 'bundel.js'
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options:{
            preserts: ['react', 'es2015']
          }
        },
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 3000,
    },
    resolve: {
      extensions: ['.js','.jsx']
    }
  },
  {
    entry: {
      style: __dirname + "/stylesheets/style.scss",
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtendedAPIPlugin('[name].css')
    ],
  },
];