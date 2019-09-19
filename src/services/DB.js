export default new class {

  get apps() {
    const context = require.context('@/data/apps', true, /\.(js)$/)
    const apps = context
      .keys()
      .map(filename => context(filename).default)
      .filter(item => item)

    return apps
  }

}()
