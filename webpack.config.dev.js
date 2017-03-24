import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve( __dirname, 'src/index' )
    ],
    target: 'web',
    output: {
        path: path.resolve( __dirname, 'src' ),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'errors-only',
        noInfo: false
    },
    plugins: [
        new webpack.LoaderOptionsPlugin( { debug: true } )
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}
