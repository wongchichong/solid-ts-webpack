
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true

    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            "solid-js": path.resolve("../solid-js/packages/solid"),
            "@solidjs/router": path.resolve("../solid-router/dist"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        configFile: false,
                        presets: ['@babel/preset-env', 'solid', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

module.exports = config
