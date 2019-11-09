module.exports = {
  "configureWebpack": {
    "devtool": "source-map",
    "devServer": {
      "open": true,
      "public": "localhost:8080",
      "proxy": {
        "/api": {
          "target": "http://49.158.32.227:3000",
          "changeOrigin": true,
          "ws": true,
          "pathRewrite": {
            "^/api": "/api"
          },
          "secure": false
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}