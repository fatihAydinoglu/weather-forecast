const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {

    // Check if it is for prod build
    const isProd = env === 'prod';

    // Default config values for development
    let entryMain = [
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ];

    let outputFolder = 'dist';

    let plugins = [
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html'), // eslint-disable-line no-undef
            filename: 'index.html',
            inject: 'body'
        })
    ];

    let outputFileName = 'bundle';

    // Change config values if it is for prod
    if (isProd) {
        entryMain = [
            './index.js'
        ];
        outputFolder = 'build';
        outputFileName = '[chunkhash].[name]';
        plugins = [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: '[chunkhash].[name].js',
                minChunks: function (module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new HtmlWebpackPlugin({
                template: resolve(__dirname, 'src/index.html'), // eslint-disable-line no-undef
                filename: 'index.html',
                inject: 'body'
            })
        ];
    }

    // Build configuration object and return
    return {
        entry: {
            main: entryMain
        },
        output: {
            filename: outputFileName + '.js',
            path: resolve(__dirname, outputFolder), // eslint-disable-line no-undef
            publicPath: '/',
            sourceMapFilename: outputFileName + '.map'
        },
        context: resolve(__dirname, 'src'), // eslint-disable-line no-undef
        devtool: !isProd ? 'inline-source-map' : false,
        devServer: !isProd ? {
            contentBase: resolve(__dirname, outputFolder), // eslint-disable-line no-undef
            publicPath: '/',
            historyApiFallback: true
        } : {},
        module: {
            rules: [
                { // js loader
                    test: /\.js$/,
                    use: [
                        'babel-loader',
                    ],
                    exclude: /node_modules/
                }
            ],
        },
        plugins
    };
};