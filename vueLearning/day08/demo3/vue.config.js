const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // 在vue中获取环境变量的格式，原本文件在.env.development中
    /* 
      使用机制: 当项目以生产环境启动的时候，process.env.NODE_APP_URL就会在生产环境的文件(.env.production)
      中去取 当项目以开发环境启动的时候，process.env.NODE_APP_URL就会在开发环境的文件(.env.development)
      中去取 
    */
    proxy: process.env.NODE_APP_URL
  }
}
