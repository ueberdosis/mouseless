<template>
  <div>
    <h1>
      Sketch ⌥ ⌘ ⇧ → ↓ ⌫ ⌃
    </h1>

    <p v-if="failed">
      You failed :(
    </p>

    <button type="button" @click="start" v-if="!started">
      Start
    </button>

    <template v-if="started">
      <p>
        Type: {{ label }}
      </p>
      <button type="button" @click="stop">
        Stop
      </button>
    </template>
  </div>
</template>

<script>
import keyboardJS from 'keyboardjs'
import collect from 'collect.js'
import MousetrapClass from 'mousetrap'
import './record'
import hotkeys from 'hotkeys-js'
import de from './de'

const Mousetrap = new MousetrapClass()
Mousetrap.stopCallback = () => false

export default {
  data() {
    return {
      failed: false,
      started: false,
      label: null,
      data: [
        {
          label: 'New Artboard',
          binding: 'a',
        },
        {
          label: 'New Rectangle',
          binding: 'r',
        },
        {
          label: 'Bold',
          binding: 'meta+b',
        },
      ],
    }
  },

  methods: {
    start() {
      this.failed = false
      this.started = true
      this.next()
    },

    setBinding() {
      this.keybinding = collect(this.data).random()
    },

    next() {
      this.setBinding()
      this.label = this.keybinding.label

      Mousetrap.record(sequence => {
        console.log('typed:', sequence)
        if (sequence.includes(this.keybinding.binding)) {
          this.next()
        } else {
          this.fail()
        }
      })
    },

    fail() {
      this.stop()
      this.failed = true
    },

    stop() {
      Mousetrap.stopRecord()
      this.started = false
      this.failed = false
    },
  },

  mounted() {
    // keyboardJS.setLocale('de', de)

    // keyboardJS.bind('a', e => {
    //   e.preventRepeat()
    //   console.log('a is pressed')
    // })
    // keyboardJS.bind('a + b', e => {
    //   e.preventRepeat()
    //   console.log({ e })
    //   console.log('a and b is pressed')
    // })

    // keyboardJS.bind('*', e => {
    //   // e.preventRepeat()
    //   // console.log({ e })
    //   console.log('* is pressed')
    // })

    // keyboardJS.bind('*', e => {
    //   e.preventRepeat()
    //   console.log({ e })
    //   console.log('* is pressed')
    // })

    // keyboardJS.bind(e => {
    //   // e.preventDefault()
    //   e.preventRepeat()
    //   console.log(e.key, e.pressedKeys)
    // })

    // document.addEventListener('compositionstart', event => {
    //   console.log(`generated characters were: ${event.data}`)
    // })

    // hotkeys('ctrl+a+s', () => {
    //   console.log('you pressed ctrl+a+s!')
    // })

    // hotkeys('wcj', (event, handler) => {
    //   console.log(handler)
    //   if (hotkeys.shift) {
    //     console.log('shift is pressed!')
    //   }

    //   if (hotkeys.ctrl) {
    //     console.log('ctrl is pressed!')
    //   }

    //   if (hotkeys.alt) {
    //     console.log('alt is pressed!')
    //   }

    //   if (hotkeys.option) {
    //     console.log('option is pressed!')
    //   }

    //   if (hotkeys.control) {
    //     console.log('control is pressed!')
    //   }

    //   if (hotkeys.cmd) {
    //     console.log('cmd is pressed!')
    //   }

    //   if (hotkeys.command) {
    //     console.log('command is pressed!')
    //   }
    // })
  },

  beforeDestroy() {
    keyboardJS.reset()
  },
}
</script>

<style lang="scss" scoped>
button {
  background-color: black;
  color: white;
  padding: 0.5rem;
  font-weight: 700;
  border: 0;
  border-radius: 6px;
}
</style>
