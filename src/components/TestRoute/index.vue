<template>
  <div class="test-route">
    <div class="test-route__content">
      <div class="test-route__title">
        <template v-if="started">
          {{ currentShortcut.title }}
        </template>
        <template v-if="failed">
          Nope :(
        </template>
      </div>

      <div class="test-route__keys" v-if="started">
        <key
          v-for="(key, index) in mergedKeys"
          :key="index"
          :name="key"
          :is-active="currentShortcut.resolvedKeys.includes(key) && keys.includes(key)"
          :is-false="!currentShortcut.resolvedKeys.includes(key)"
        />
      </div>
    </div>

    <div class="test-route__footer">
      <button class="test-route__cancel" type="button" @click="stop" />
    </div>
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

  props: {
    training: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {
      success: false,
      failed: false,
      started: false,
      keyboard: new Keyboard(),
      keys: [],
      currentShortcutIndex: null,
    }
  },

  computed: {
    mergedKeys() {
      return collect([...this.keys, ...this.currentShortcut.resolvedKeys])
        .unique()
        .toArray()
    },

    level() {
      return this.$db.level(this.$route.params.level)
    },

    app() {
      return this.$db.app(this.$route.params.id)
    },

    shortcuts() {
      return collect(this.app.shortcutsByLevel(this.level.level))
        .shuffle()
        .toArray()
    },

    currentShortcut() {
      return this.shortcuts[this.currentShortcutIndex]
    },
  },

  methods: {
    start() {
      this.failed = false
      this.started = true
      this.success = false
      this.next()
    },

    next() {
      this.keys = []

      if (this.currentShortcutIndex === this.shortcuts.length - 1) {
        this.finish()
      } else {
        this.currentShortcutIndex = this.currentShortcutIndex === null
          ? 0
          : this.currentShortcutIndex + 1
      }
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
      this.$router.push({ name: 'app.levels' })
    },

    finish() {
      this.$router.push({ name: 'apps' })
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
      const match = this.keyboard.is(this.currentShortcut.resolvedKeys)

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

    if (this.training) {
      this.start()
    }
  },

  beforeDestroy() {
    this.keyboard.destroy()
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
