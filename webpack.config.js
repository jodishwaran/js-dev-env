var path = require('path');

module.exports={
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [path.resolve(__dirname, 'src/index')],
    output: {
        path: path.resolve(__dirname + 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: '/\.js$/', exclude:'node_modules',loaders: ['babel']},
            {test: '/\.css$/', loaders: ['style','css']},
        ]
    },
    plugins:[],
    taeget:'web'
}