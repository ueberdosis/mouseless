import Vue from 'vue'
import moment from 'moment'
import uuidv4 from 'uuid/v4'
import collect from 'collect.js'
import Store from 'electron-store'
import keymap from 'native-keymap'
import App from '@/models/App'
import Run from '@/models/Run'

export default new class {

  debug = false

  store = new Store()

  get locale() {
    return keymap.getCurrentKeyboardLayout().localizedName
  }

  get verified() {
    return this.store.get('verified', false)
  }

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
    const context = require.context('@/apps', true, /\.(js)$/)
    const apps = context
      .keys()
      .map(filename => context(filename).default)
      .filter(data => {
        const debug = typeof data.debug === 'undefined' ? false : data.debug

        return debug === this.debug
      })
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
      .filter(run => run.locale === this.locale)
  }

  createRun(props = {}) {
    return this.createModel(Run, {
      ...props,
      id: uuidv4(),
      createdAt: moment.utc().format(),
      locale: this.locale,
    })
  }

}()
