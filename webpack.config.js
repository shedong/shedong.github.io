const path = require('path')
module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', '']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style!css!less"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css"
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            },
            {
                test: /\.(jpg|png)$/,
                exclude: /node_modules/,
                loader: "url?limit=8192"
            },
        ]
    },
    watch: true
}