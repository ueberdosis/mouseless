module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/variables.scss";',
      },
    },
  },

  chainWebpack: config => {
    // required for 'native-ext-loader'
    config.node.set('__dirname', true)

    config.target('electron-renderer')

    config
      .output
      .globalObject('(typeof self !== "undefined" ? self : this)')

    config.module
      .rule('node')
      .test(/\.node$/)
      .use('native-ext-loader')
      .loader('native-ext-loader')
      .end()

    config.module
      .rule('worker')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('worker-loader')
      .end()

    config.resolve.extensions.prepend('.node')
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
        afterSign: 'electron-builder-notarize',
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
