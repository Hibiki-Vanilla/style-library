const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      postcss:{

      },
      less:{
        javascriptEnabled:true
      }
    }
  }
})
