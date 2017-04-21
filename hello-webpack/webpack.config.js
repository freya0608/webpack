/**
 * Created by freya on 2017/4/20.
 */
module.exports = {
    entry:[
        './hello-webpack/js/entry.js'
    ],
    output: {
        path: __hello-webpack + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['jsx?harmony']}
        ]
        
    }
};