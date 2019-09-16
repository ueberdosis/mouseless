export default class Keyboard {

  constructor() {
    this.specialKeys = ['shift', 'control', 'alt', 'meta']
    this.listeners = []
    this.pressedKeys = []
    this.keydownHandler = this.handleKeydown.bind(this)
    this.keyupHandler = this.handleKeyup.bind(this)
    window.addEventListener('keydown', this.keydownHandler)
    window.addEventListener('keyup', this.keyupHandler)
  }

  on(binding, callback) {
    this.listeners.push({
      binding,
      callback,
    })
  }

  handleKeydown(event) {
    const binding = this.getEventBinding(event)
    const keyIsPressed = this.keyIsPressed(event)

    this.increasePressedKeys(event)

    // console.log('pressed ', event.key, this.pressedKeys.map(e => this.getEventBinding(e)))
    console.log('keydown', this.getEventBinding(event), this.pressedKeys.map(e => this.getEventBinding(e)))

    this.listeners
      .filter(listener => listener.binding === binding)
      .filter(() => !keyIsPressed)
      .forEach(listener => {
        listener.callback(event)
      })
  }

  handleKeyup(event) {
    console.log('keyup', this.getEventBinding(event))
    this.decreasePressedKeys(event)
  }

  keyIsPressed(event) {
    return !!this.pressedKeys.find(e => e.code === event.code)
  }

  increasePressedKeys(event) {
    if (!this.keyIsPressed(event)) {
      this.pressedKeys.push(event)
    }
  }

  decreasePressedKeys(event) {
    this.pressedKeys = this.pressedKeys.filter(e => e.code !== event.code)
  }

  getEventBinding(event) {
    return event.key.toLowerCase()
  }

  destroy() {
    this.listeners = []
    this.pressedKeys = []
    window.removeEventListener('keydown', this.keydownHandler)
    window.removeEventListener('keyup', this.keyupHandler)
  }

}
