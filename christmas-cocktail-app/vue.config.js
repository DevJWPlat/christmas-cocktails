const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: '/christmas-cocktails/',
  lintOnSave: false,
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: '0.0.0.0', // Use hostname instead of host
        port: 8080, // Ensure this matches your setup
        protocol: 'ws'
      }
    },
    host: '0.0.0.0',
    port: 8080
  }
}
