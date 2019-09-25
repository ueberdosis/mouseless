import Vue from 'vue'
import App from '@/models/App'

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

}()
