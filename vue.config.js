const CopyWebpackPlugin = require('copy-webpack-plugin')

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

    config.externals({
      ...config.get('externals'),
      keymapping: '/build/Release/keymapping',
    })
  },

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'node_modules/native-keymap/build/Release/keymapping.node',
          to: 'build/Release',
        },
      ]),
    ],
  },
}
