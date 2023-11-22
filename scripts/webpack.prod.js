const { merge } = require('webpack-merge')

const base = require('./webpack.base.js')

module.exports = merge(base, {
    mode: 'producton', // 生产模式
})