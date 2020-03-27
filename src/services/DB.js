import Vue from 'vue'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import collect from 'collect.js'
import keymap from 'native-keymap'
import Store from '@/services/Store'
import App from '@/models/App'
import Run from '@/models/Run'

export default new class {

  get locale() {
    return keymap.getCurrentKeyboardLayout().localizedName
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
      .map(filename => context(filename))
      .filter(data => {
        const debug = typeof data.debug === 'undefined' ? 'false' : 'true'

        return debug === process.env.VUE_APP_DEBUG
      })
      .map(data => this.createModel(App, data))

    return apps
  }

  app(id = null) {
    return this.apps.find(app => app.id === id)
  }

  get runs() {
    return collect(Store.get('runs') || {})
      .values()
      .toArray()
      // TODO: filter old shortcuts ids?
      // .map(data => {
      //   const app = this.app(data.appId)
      //   const learnedIds = data.learnedIds
      //     .filter(shortcutId => app.shortcuts.find(shortcut => shortcut.id === shortcutId))
      //   return this.createModel(Run, { ...data, learnedIds })
      // })
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
