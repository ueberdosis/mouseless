export default class Keyboard {

  constructor() {
    this.listeners = []
    this.pressedKeys = []
    document.addEventListener('keydown', this.handleKeydown.bind(this))
    document.addEventListener('keyup', this.handleKeyup.bind(this))
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

    this.listeners
      .filter(listener => listener.binding === binding)
      .filter(() => !keyIsPressed)
      .forEach(listener => {
        listener.callback(event)
      })
  }

  handleKeyup(event) {
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
    document.removeEventListener('keydown', this.handleKeydown)
    document.removeEventListener('keyup', this.handleKeyup)
  }

}
