export default class Emitter {
  constructor() {
    this.events = {}
  }

  getEvents(name) {
    if (typeof this.events[name] === 'undefined') {
      this.events[name] = new Set()
    }

    return this.events[name]
  }

  on(name, fn) {
    this.getEvents(name).add(fn)
  }

  once(name, fn) {
    const self = this
    const onceFn = function (...args) {
      self.off(name, onceFn)
      fn.apply(self, args)
    }

    this.on(name, onceFn)
  }

  emit(name, payload) {
    this.getEvents(name).forEach(fn => fn(payload))
  }

  off(name, fn) {
    this.getEvents(name).delete(fn)
  }

  destroy() {
    this.events = {}
  }
}
