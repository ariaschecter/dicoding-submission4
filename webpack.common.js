const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      id: 'restaurant-app-v1',
      name: "acielana's restaurant",
      short_name: 'Acielana',
      description: 'Restaurant App by Acielana',
      background_color: '#FFFFFF',
      filename: 'app.webmanifest',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '.',
      fingerprints: true,
      ios: true,
      publicPath: './',
      includeDirectory: true,
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons'),
        },
        {
          src: path.resolve('src/public/icons/icon.png'),
          destination: path.join('icons'),
          size: '1024x1024',
        },
        {
          src: path.resolve('src/public/icons/icon.png'),
          destination: path.join('icons'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          // globOptions: {
          //   ignore: ['**/img/**'],
          // },
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
};
