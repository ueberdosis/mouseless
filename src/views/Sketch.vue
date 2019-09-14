<template>
  <div>
    <h1>
      Sketch
    </h1>

    <div v-if="failed">
      You failed :(
    </div>

    <div v-if="!started">
      <button type="button" @click="start">
        Start
      </button>
    </div>

    <div v-if="started">
      <p>
        Type: {{ label }}
      </p>
      <button type="button" @click="stop">
        Stop
      </button>
    </div>
  </div>
</template>

<script>
import collect from 'collect.js'
import MousetrapClass from 'mousetrap'
import './record'

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
