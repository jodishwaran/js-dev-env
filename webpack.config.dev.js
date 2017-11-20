import path from 'path'
import DiskPlugin from 'webpack-disk-plugin'

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [path.resolve(__dirname, 'src/index')],
    output: {
        path: path.join(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loaders: ['style', 'css'] },
        ]
    },
    plugins: [
        new DiskPlugin({
            output: {
                path: path.join(__dirname, 'src')
            },
            files: [
                { asset: "bundle.js" }
            ]
        })
    ],
    target: 'web'
}