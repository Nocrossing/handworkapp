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
    },
    devServer: {
      proxy: {  
        '/api': {
          target: 'http://localhost:8080', //路径指向本地主机地址及端口号
          ws: true, 
          changeOrigin: true,
          pathRewrite:{
              '^/api': '/data' //路径转发代理
          }
        }
      }
    }
}