const path = require('path');

module.exports = {
    // develop mode is sourcemap enable
    mode: 'develop', // 'production' | 'none'
    entry: '',
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
        module: [
            'node_modules',
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
};