const path = require('path')
module.exports = {
  outputDir: '../express/public',
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
  },
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
  publicPath: './',
  pwa: {
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      skipWaiting: true,
      clientsClaim: true,
      importWorkboxFrom: 'local',
      importsDirectory: 'js',
      navigateFallback: '/',
      navigateFallbackBlacklist: [/\/api\//]
    }
  }
}
