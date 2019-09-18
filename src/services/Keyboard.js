import keymap from 'native-keymap'
import Emitter from '@/services/Emitter'

console.log(keymap.getKeyMap())

export default class Keyboard {

  constructor() {
    this.emitter = new Emitter()
    this.specialKeyNames = ['shift', 'control', 'alt', 'meta']
    this.specialKeys = []
    this.regularKeys = []
    this.keydownHandler = this.handleKeydown.bind(this)
    this.keyupHandler = this.handleKeyup.bind(this)
    window.addEventListener('keydown', this.keydownHandler)
    window.addEventListener('keyup', this.keyupHandler)
  }

  static aliases = [
    { name: 'shift', alias: '⇧' },
    { name: 'control', alias: '⌃' },
    { name: 'alt', alias: '⌥' },
    { name: 'meta', alias: '⌘' },
    { name: ' ', alias: 'space' },
  ]

  static formatKeyName(name) {
    const result = this.aliases.find(alias => alias.name === name)
    return result ? result.alias : name
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

  get keys() {
    return [...this.specialKeys, ...this.regularKeys]
  }

  getKeyName(event) {
    return event.key.toLowerCase()
  }

  handleKeydown(event) {
    this.setSpecialKeys(event)
    const name = this.getKeyName(event)
    const isSpecialKey = this.specialKeys.includes(name)
    const isPressed = this.isPressed(name)

    if (isPressed) {
      return
    }

    this.emitter.emit('update', { event, keys: this.keys })

    if (isSpecialKey) {
      return
    }

    this.regularKeys.push(name)
    this.emitter.emit('shortcut', { event, keys: this.keys })
    this.resetKeys()
  }

  handleKeyup(event) {
    this.setSpecialKeys(event)
    this.emitter.emit('update', { event, keys: this.keys })
  }

  is(keys) {
    return keys.every(key => this.keys.includes(key))
  }

  isPressed(name) {
    return !!this.regularKeys.find(key => key === name)
  }

  resetKeys() {
    this.regularKeys = []
    this.specialKeys = []
  }

  destroy() {
    this.emitter.destroy()
    window.removeEventListener('keydown', this.keydownHandler)
  }

}
