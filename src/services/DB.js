import Vue from 'vue'
import App from '@/models/App'
import Level from '@/models/Level'

export default new class {

  createModel(model, props) {
    const Constructor = Vue.extend({
      render: () => false,
      ...model,
    })

    return new Constructor({
      propsData: props,
    }).$mount()
  }

  get apps() {
    const context = require.context('@/data/apps', true, /\.(js)$/)
    const apps = context
      .keys()
      .map(filename => context(filename).default)
      .map(data => this.createModel(App, data))

    return apps
  }

  app(id = null) {
    return this.apps.find(app => app.id === id)
  }

  get levels() {
    return require('@/data/levels').default
      .map(data => this.createModel(Level, data))
  }

  level(level = null) {
    return this.levels.find(item => item.level === parseInt(level, 10))
  }

}()
