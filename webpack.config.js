const environment = process.env.env;
const extraPlugins = [];
const loaders = ['babel'];

module.exports = {
    entry: {
      'index': './src/index.js',
    },
    mode: "production",
    output: {
      path: __dirname,
      libraryTarget: 'umd',
      filename: 'lib/[name].js'
    },
    module: {
      rules: [
        { 
          test: /\.js$/,
          exclude: /build|lib|bower_components|node_modules/,
          use: {
            loader: "babel-loader",
            query: {
              presets: ['react'],
              plugins: ['transform-class-properties']
            }
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.webpack.js', '.js']
    },
    externals: {
      'react': 'umd react',
      'react-dom': 'umd react-dom',
      'lodash': 'umd lodash'
    },
    plugins: [
      ...extraPlugins
    ]
};
