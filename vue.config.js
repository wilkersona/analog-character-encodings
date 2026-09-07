const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'build',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/analog-character-encodings/'
    : '/',
})
