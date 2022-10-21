const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'js'),
    mode: 'development',
    entry:'.js/script.js',
    output:{
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'app'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    }
}