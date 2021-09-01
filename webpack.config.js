const path = require('path');

module.exports = {
    // develop mode is sourcemap enable
    mode: 'development', // 'production' | 'development' | 'none'
    // Entry point.
    entry: './src/ts/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
            rules: [{
                // .ts
                test: /\.ts$/,
                // compile typescript
                use: 'ts-loader'                
            }]
    },
    // To resolve .ts files with an import statement
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
};