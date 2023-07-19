// const path = require('path')
import * as path from 'path';
// const Dotenv = require('dotenv-webpack');
// const webpack = require('webpack')
import * as webpack from 'webpack'
import Dotenv from 'dotenv'

module.exports = {
    mode: 'production',
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
        new Dotenv(),
    ]
}