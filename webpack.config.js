const path = require('path')
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: []
    },
    plugins: [
        new Dotenv()
    ]
}