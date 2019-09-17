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
          :active="false"
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
      failed: false,
      started: false,
      label: null,
      keyboard: new Keyboard(),
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
      this.next()
    },

    setBinding() {
      this.keybinding = collect(this.data).random()
    },

    next() {
      this.setBinding()
      this.label = this.keybinding.label
    },

    fail() {
      this.stop()
      this.failed = true
    },

    stop() {
      this.started = false
      this.failed = false
    },
  },

  mounted() {
    this.keyboard.on('update', () => {
      if (!this.started) {
        return
      }

      console.log('update')
    })

    this.keyboard.on('shortcut', ({ event }) => {
      if (!this.started) {
        return
      }
      console.log('shortcut')
      // event.preventDefault()
      // const match = this.keyboard.is(this.keybinding.binding)
      // console.log({ match })

      // if (match) {
      //   this.keyboard.stop()
      //   this.next()
      // } else {
      //   this.fail()
      // }
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
