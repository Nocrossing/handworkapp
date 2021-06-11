module.exports = {
    publicPath: './',
    runtimeCompiler: true,
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}