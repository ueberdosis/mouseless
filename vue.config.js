module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/variables.scss";
        `,
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('node')
      .test(/\.node$/)
      .use('node-loader')
      .loader('node-loader')
      .end()

    config.resolve.extensions.prepend('.node')
  },
}
