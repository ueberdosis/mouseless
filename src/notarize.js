require('dotenv').config()
const { notarize } = require('electron-notarize')

module.exports = async context => {
  const { electronPlatformName, appOutDir } = context
  const appName = context.packager.appInfo.productFilename

  if (electronPlatformName !== 'darwin') {
    return
  }

  try {
    await notarize({
      // appBundleId: 'com.Mouseless.app',
      appBundleId: process.env.VUE_APP_IS_SETAPP
        ? 'com.ueberclub.mouseless-setapp'
        : 'com.Mouseless.app',
      appPath: `${appOutDir}/${appName}.app`,
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_ID_PASS,
    })
  } catch (err) {
    console.error(err)
  }
}
