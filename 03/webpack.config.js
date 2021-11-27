const path = require('path');

// webpack 中的所有的配置信息都应该写在 module.exports 中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',

    // 指定 webpack打包是要使用模块
    module: {
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的 loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    }
}