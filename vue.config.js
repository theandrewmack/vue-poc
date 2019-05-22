module.exports = {
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        foobar: {
            entry: 'src/foobar/main.js',
            template: 'public/index.html',
            filename: 'foobar.html',
            title: 'FooBar Page',
            chunks: ['chunk-vendors', 'chunk-common', 'foobar']
        }
    }
}