import webpack from 'webpack';
import path from 'path';

//Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    resolve: {
        extensions: ['*', '.js', '.jsx', 'json', '.ts', '.tsx']
    },
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index'),
    target: 'web',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        })
    ],
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.eot(\?v=\d+.\d+.\d+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  mimetype: 'application/font-woff',
                  name: '[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  mimetype: 'application/octet-stream',
                  name: '[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  mimetype: 'image/svg+xml',
                  name: '[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(jpe?g|png|gif|ico)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          },
          {
            test: /(\.css|\.scss|\.sass)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'resolve-url-loader',
              }, {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: [path.resolve(__dirname, 'src')],
                  },
                  sourceMap: true
                }
              }
            ]
          }
        ]
      }
}