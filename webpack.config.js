const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: './index.html' 
});

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src/client/index.jsx"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, 
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/i,
            },
            {
                use: 'html-loader',
                test: /\.html$/
            }
            
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3006,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
    }
}