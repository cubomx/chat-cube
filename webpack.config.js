module.exports = {
    entry: './src/client/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
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
            }
            
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
}