const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    externals: {
        lodash: 'lodash'

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        library: 'library',  // 全局变量里加入一个 library
        libraryTarget: "umd"  // umd cmd common.js
    }
}