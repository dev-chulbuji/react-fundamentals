var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
                options: {
                    presets: [
                        'es2015',
                        'react'
                    ],
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel']
                }
            }
        ]
    },
    
    resolve: {
        modules: ['node_modules']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}