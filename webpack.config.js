const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
   rules: [ //this texts for a file and loads in the file
   {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
   }, 
   {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
   ],
  },
  devServer: {
      static: {
          directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
  }
};