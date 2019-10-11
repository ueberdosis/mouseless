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
    const nodeLoader = process.env.NODE_ENV === 'development'
      ? 'node-loader'
      : 'native-ext-loader'

    config.module
      .rule('node')
      .test(/\.node$/)
      .use(nodeLoader)
      .loader(nodeLoader)
      .end()

    config.resolve.extensions.prepend('.node')
  },

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        artifactName: '${productName}-${version}-${os}.${ext}', // eslint-disable-line
        mac: {
          target: ['dmg'],
          extendInfo: {
            NSUserNotificationAlertStyle: 'alert',
          },
          publish: [
            {
              provider: 'spaces',
              name: 'ueber',
              region: 'fra1',
              channel: 'latest',
              path: '/mouseless/mac',
              acl: 'public-read',
            },
          ],
        },
      },
    },
  },
}
