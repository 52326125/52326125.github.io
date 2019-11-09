module.exports = {
    configureWebpack: {
      devtool: 'source-map',
      devServer: {
        port: process.env.port,
        open: true,
        public: 'localhost:8080',
        proxy: {
          '/api': {
            target: 'http://49.158.32.227:3000',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': '/api'
            },
            'secure': false
          }
        }
      }
    }
  }
  