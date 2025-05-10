const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/' // Explicitly set public path
    },
    plugins: [
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
});