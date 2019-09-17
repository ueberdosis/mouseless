import Emitter from '@/services/Emitter'

export default class Keyboard {

  constructor() {
    this.emitter = new Emitter()
    this.specialKeys = []
    this.keys = []
    this.keydownHandler = this.handleKeydown.bind(this)
    this.keyupHandler = this.handleKeyup.bind(this)
    window.addEventListener('keydown', this.keydownHandler)
    window.addEventListener('keyup', this.keyupHandler)
  }

  on(...args) {
    this.emitter.on(...args)
  }

  off(...args) {
    this.emitter.off(...args)
  }

  setSpecialKeys(event) {
    const keys = []

    if (event.shiftKey) {
      keys.push('shift')
    }

    if (event.ctrlKey) {
      keys.push('control')
    }

    if (event.altKey) {
      keys.push('alt')
    }

    if (event.metaKey) {
      keys.push('meta')
    }

    this.specialKeys = keys
  }

  getKeys() {
    return [...this.specialKeys, ...this.keys]
  }

  handleKeydown(event) {
    this.setSpecialKeys(event)
    this.emitter.emit('update', { event })

    const name = event.key.toLowerCase()
    const isSpecialKey = this.specialKeys.includes(name)
    const isPressed = this.isPressed(name)

    if (isSpecialKey || isPressed) {
      return
    }

    this.keys.push(name)
    const keys = this.getKeys()

    this.emitter.emit('shortcut', { event, keys })

    this.resetKeys()
  }

  handleKeyup(event) {
    this.setSpecialKeys(event)
    this.emitter.emit('update', { event })
  }

  is(keys) {
    const pressedKeys = this.getKeys()
    const match = keys.every(key => pressedKeys.includes(key))
    return match
  }

  isPressed(name) {
    return !!this.keys.find(key => key === name)
  }

  resetKeys() {
    this.keys = []
    this.specialKeys = []
  }

  destroy() {
    this.emitter.destroy()
    window.removeEventListener('keydown', this.keydownHandler)
  }

}
