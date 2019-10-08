import Vue from 'vue'
import moment from 'moment'
import uuidv4 from 'uuid/v4'
import collect from 'collect.js'
import Store from 'electron-store'
import App from '@/models/App'
import Run from '@/models/Run'

export default new class {

  store = new Store()

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
      .filter(data => data.debug)
      .map(data => this.createModel(App, data))

    return apps
  }

  app(id = null) {
    return this.apps.find(app => app.id === id)
  }

  get runs() {
    return collect(this.store.get('runs') || {})
      .values()
      .toArray()
      .map(data => this.createModel(Run, data))
  }

  createRun(props = {}) {
    return this.createModel(Run, {
      ...props,
      id: uuidv4(),
      createdAt: moment.utc().format(),
    })
  }

}()
