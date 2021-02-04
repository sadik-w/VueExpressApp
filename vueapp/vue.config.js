module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9528,
    proxy: {
      "/app": {
        target: "http://localhost:9527",
        changeOrign: true,
        pathRewrite: { "^/app": "" }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: './'
}