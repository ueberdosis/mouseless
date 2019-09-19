import keymap from 'native-keymap'
import Emitter from '@/services/Emitter'

export default class Keyboard {

  static keymap = Object
    .entries(keymap.getKeyMap())
    .map(([code, data]) => ({
      code,
      ...data,
    }))

  static aliases = [
    { name: 'Shift', alias: '⇧' },
    { name: 'ShiftLeft', alias: '⇧L' },
    { name: 'ShiftRight', alias: '⇧R' },
    { name: 'Control', alias: '⌃' },
    { name: 'ControlLeft', alias: '⌃L' },
    { name: 'ControlRight', alias: '⌃R' },
    { name: 'Alt', alias: '⌥' },
    { name: 'AltLeft', alias: '⌥L' },
    { name: 'AltRight', alias: '⌥R' },
    { name: 'Meta', alias: '⌘' },
    { name: 'MetaLeft', alias: '⌘L' },
    { name: 'MetaRight', alias: '⌘R' },
  ]

  static formatKeyCode(name) {
    const result = this.aliases.find(alias => alias.name === name)
    return result ? result.alias : name
  }

  constructor() {
    this.emitter = new Emitter()
    this.specialKeyNames = [
      'Shift',
      'ShiftLeft',
      'ShiftRight',
      'Control',
      'ControlLeft',
      'ControlRight',
      'Alt',
      'AltLeft',
      'AltRight',
      'Meta',
      'MetaLeft',
      'MetaRight',
    ]
    this.specialKeys = []
    this.regularKeys = []
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
      keys.push('Shift')
    }

    if (event.ctrlKey) {
      keys.push('Control')
    }

    if (event.altKey) {
      keys.push('Alt')
    }

    if (event.metaKey) {
      keys.push('Meta')
    }

    this.specialKeys = keys
  }

  get keys() {
    return [...this.specialKeys, ...this.regularKeys]
  }

  get isOnlyShiftPressed() {
    return this.specialKeys.length === 1 && this.specialKeys.includes('Shift')
  }

  get isOnlyAltPressed() {
    return this.specialKeys.length === 1 && this.specialKeys.includes('Alt')
  }

  get isShiftAndAltPressed() {
    return this.specialKeys.includes('Shift') && this.specialKeys.includes('Alt')
  }

  getKeyValue(event) {
    const key = this.constructor.keymap.find(item => item.code === event.code)

    if (!key) {
      return event.code
    }

    if (this.isOnlyShiftPressed) {
      return key.withShift
    }

    if (this.isOnlyAltPressed) {
      return key.withAltGr
    }

    if (this.isShiftAndAltPressed) {
      return key.withShiftAltGr
    }

    return key.value
  }

  getKeyName(event) {
    return event.code
  }

  static resolveCodesFromKeys(keys = []) {
    return keys
      .map(key => {
        let match = null

        if (key.toLowerCase() === 'shift') {
          return 'Shift'
        }

        if (key.toLowerCase() === 'control') {
          return 'Control'
        }

        if (key.toLowerCase() === 'alt') {
          return 'Alt'
        }

        if (key.toLowerCase() === 'meta') {
          return 'Meta'
        }

        match = this.keymap.find(item => item.value === key)

        if (match) {
          return match.value
        }

        match = this.keymap.find(item => item.withShift === key)

        if (match) {
          return ['Shift', match.value]
        }

        match = this.keymap.find(item => item.withAltGr === key)

        if (match) {
          return ['Alt', match.value]
        }

        match = this.keymap.find(item => item.withShiftAltGr === key)

        if (match) {
          return ['Shift', 'Alt', match.value]
        }

        return match
      })
      .flat()
  }

  handleKeydown(event) {
    this.setSpecialKeys(event)
    const value = this.getKeyValue(event)
    const isSpecialKey = this.specialKeyNames.includes(event.key)
    const isPressed = this.isPressed(value)

    if (isPressed) {
      return
    }

    this.emitter.emit('update', { event, keys: this.keys })

    if (isSpecialKey) {
      return
    }

    this.regularKeys.push(value)
    this.emitter.emit('shortcut', { event, keys: this.keys })
    this.resetKeys()
  }

  handleKeyup(event) {
    this.setSpecialKeys(event)
    this.emitter.emit('update', { event, keys: this.keys })
  }

  is(keys) {
    const match1 = keys.every(key => this.keys.includes(key))
    const match2 = this.keys.every(key => keys.includes(key))
    return match1 && match2
  }

  isPressed(name) {
    return !!this.regularKeys.find(key => key.toLowerCase() === name.toLowerCase())
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
