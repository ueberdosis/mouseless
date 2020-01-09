module.exports = {
  // devServer: {
  //   overlay: {
  //     warnings: false,
  //     errors: false,
  //   },
  // },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/variables.scss";',
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

    // cross-env can't send through the electron wrapper to the vue app
    // so we have to provide it here
    config.plugin('define').tap(definitions => {
      // eslint-disable-next-line
      definitions[0]['process.env'].IS_SETAPP = JSON.stringify(process.env.IS_SETAPP)
      return definitions
    })
  },

  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: config => {
        const nodeLoader = process.env.NODE_ENV === 'development'
          ? 'node-loader'
          : 'native-ext-loader'

        config.module
          .rule('node')
          .test(/\.node$/)
          .use(nodeLoader)
          .loader(nodeLoader)
          .end()

        config.resolve.extensions.add('.js').add('.node')
      },
      builderOptions: {
        appId: process.env.VUE_APP_IS_SETAPP === 'true'
          ? 'com.ueberclub.mouseless-setapp'
          : 'com.Mouseless.app',
        artifactName: '${productName}-${version}-${os}.${ext}', // eslint-disable-line
        afterSign: 'src/notarize.js',
        productName: 'Mouseless',
        mac: {
          hardenedRuntime: true,
          gatekeeperAssess: false,
          entitlements: 'build/entitlements.mac.plist',
          entitlementsInherit: 'build/entitlements.mac.plist',
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
