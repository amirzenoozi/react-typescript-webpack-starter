const webpack = require('webpack');
const path = require('path');
const AutoPreFixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  public: path.resolve(__dirname, '../public'),
  mono_svg: path.resolve(__dirname, './src/icons/mono-icons'),
  color_svg: path.resolve(__dirname, './src/icons/color-icons'),
  assets: path.resolve(__dirname, './src/assets'),
};

module.exports = (env = {}) => {
  return {
    mode: 'production',
    target: 'web',
    entry: './src/index.prod.tsx',
    devtool: 'source-map',
    output: {
      filename: '[name].[hash:8].js',
      chunkFilename: '[id].[hash:8].js',
      publicPath: '/',
      path: PATHS.build,
    },
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|gif|svg|pdf|woff|woff2|eot|ttf|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: '/node_modules/',
          use: [{
            loader: 'ts-loader',
          }, {
            loader: 'file-replace-loader',
            options: {
              condition: 'always', // <-- Note that the rule applies for all files!
              replacement(resourcePath) {
                if (resourcePath.endsWith('environment.ts')) {
                  return path.resolve(__dirname, '../environments/environment.prod.ts');
                }
              },
              async: true,
            },
          }],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                import: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [require('autoprefixer')],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [require('autoprefixer')],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: path.resolve(__dirname, '../node_modules'),
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({ filename: 'main_[hash].css' }),
      new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify('/'),
      }),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
        PUBLIC_URL: '',
      }),
      require('autoprefixer'),
    ],
    resolve: {
      alias: PATHS,
      extensions: [ '.js', '.ts', '.tsx' ],
    },
  };
};
