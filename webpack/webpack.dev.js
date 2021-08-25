const webpack = require('webpack');
const path = require('path');
const AutoPreFixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

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

const Environments = {
  port: 4000,
};

const BrowserSyncOptions = {
  host: 'localhost',
  port: Environments.port + 1,
  proxy: `http://localhost:${Environments.port}`,
  ui: {
    port: Environments.port + 2,
  },
};

// Add Below Code Into The Plugins Part If You Want To Enable It
// new TSLintPlugin(TsLintConfig),
const TsLintConfig = {
  files: [ './src/**/*.ts', './src/**/*.tsx' ],
  config: './tslint.json',
  project: './tsconfig.json',
  silent: false,
};

module.exports = (env = {}) => {
  return {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
      filename: '[name].js',
      chunkFilename: '[id].js',
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
          loader: 'ts-loader',
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          // loader: 'source-map-loader',
          use: [
            {
              loader: 'source-map-loader',
              options: {
                filterSourceMappingUrl: (url, resourcePath) => {
                  if (/.*\/node_modules\/.*/.test(resourcePath)) {
                    return false;
                  }
                  return true;
                },
              },
            },
          ],
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
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ],
        },
      ],
    },
    ignoreWarnings: [/Failed to parse source map/],
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      new webpack.HotModuleReplacementPlugin(),
      new BrowserSyncPlugin(BrowserSyncOptions, { reload: true }),
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify('/'),
      }),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, { PUBLIC_URL: '' }),
    ],
    devServer: {
      contentBase: PATHS.public,
      publicPath: '/',
      compress: true,
      open: false,
      hot: true,
      historyApiFallback: true,
      port: Environments.port,
      allowedHosts: [
        `http://localhost:${Environments.port + 1}/`,
      ],
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
    devtool: 'source-map',
    optimization: {
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
    resolve: {
      alias: PATHS,
      extensions: [ '.js', '.ts', '.tsx' ],
      fallback: {
        fs: false,
      },
    },
    stats: {
      warnings: true,
    },
  };
};
