/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
    entry: './functions/firstLambda.js',
    mode: isLocal ? 'development' : 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
      },
      target:'node',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            // you forgot to set the `loader` property
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };