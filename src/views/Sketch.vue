<template>
  <div>
    <h1>
      Sketch
    </h1>

    <p v-if="failed">
      Nope :(
    </p>

    <button type="button" @click="start" v-if="!started">
      Start
    </button>

    <template v-if="started">
      <p>
        {{ label }}
      </p>
      <p>
        <key
          v-for="(key, index) in keybinding.binding"
          :key="index"
          :name="key"
          :active="keys.includes(key)"
        />
      </p>
      <button type="button" @click="stop">
        Stop
      </button>
    </template>
  </div>
</template>

<script>
import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'
import Key from '@/components/Key'

export default {
  components: {
    Key,
  },

  data() {
    return {
      success: false,
      failed: false,
      started: false,
      label: null,
      keyboard: new Keyboard(),
      keys: [],
      data: [
        {
          label: 'New Artboard',
          binding: ['a'],
        },
        {
          label: 'New Rectangle',
          binding: ['r'],
        },
        {
          label: 'Bold',
          binding: ['meta', 'b'],
        },
      ],
    }
  },

  methods: {
    start() {
      this.failed = false
      this.started = true
      this.success = false
      this.next()
    },

    setBinding() {
      this.keybinding = collect(this.data).random()
    },

    next() {
      this.keys = []
      this.setBinding()
      this.label = this.keybinding.label
    },

    fail() {
      this.stop()
      this.failed = true
      this.success = false
    },

    stop() {
      this.started = false
      this.failed = false
      this.success = false
    },
  },

  mounted() {
    this.keyboard.on('update', ({ keys }) => {
      if (!this.started || this.success) {
        return
      }

      this.keys = keys
    })

    this.keyboard.on('shortcut', ({ event, keys }) => {
      if (!this.started || this.success) {
        return
      }

      this.keys = keys
      event.preventDefault()
      const match = this.keyboard.is(this.keybinding.binding)

      if (match) {
        this.success = true
        setTimeout(() => {
          this.success = false
          this.next()
        }, 1000)
      } else {
        this.fail()
      }
    })
  },

  beforeDestroy() {
    this.keyboard.destroy()
  },
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}

button {
  background-color: black;
  color: white;
  padding: 0.8rem 1rem;
  font: inherit;
  font-weight: 700;
  border: 0;
  border-radius: 9px;
}
</style>
