module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
  devServer: {
    // 解决跨域问题， 所有请求会被正向代理到 这个 api 服务器
    proxy: {
      '/api': {
        target: 'http://mingyue.utools.club',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  }
}