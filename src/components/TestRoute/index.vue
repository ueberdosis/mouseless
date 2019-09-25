<template>
  <div class="test-route">
    <div class="test-route__content">
      <div class="test-route__title">
        <template v-if="started">
          {{ currentShortcut.title }}
        </template>
        <!-- <template v-if="failed">
          Nope :(
        </template> -->
      </div>

      <!-- <div class="test-route__keys" v-if="started">
        <key
          v-for="(key, index) in mergedKeys"
          :key="index"
          :name="key"
          :is-active="currentShortcut.resolvedKeys.includes(key) && keys.includes(key)"
          :is-false="!currentShortcut.resolvedKeys.includes(key)"
        />
      </div> -->

      <div class="test-route__keys" v-if="showKeys">
        <key
          v-for="(key, index) in currentShortcut.resolvedKeys"
          :key="index"
          :name="key"
        />
      </div>
    </div>

    <div class="test-route__footer">
      <button class="test-route__cancel" type="button" @click="stop" />
      {{ learnedIds.length }} / {{ shortcuts.length }}
    </div>
  </div>
</template>

<script>
import weighted from 'weighted'
import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'
import Key from '@/components/Key'

export default {
  components: {
    Key,
  },

  data() {
    return {
      timeout: null,
      keyboard: new Keyboard(),
      pressedKeys: [],
      run: null,
      trainedIds: [],
      learnedIds: [],
      failedIds: [],
      currentShortcut: null,
    }
  },

  computed: {
    showKeys() {
      if (!this.started) {
        return false
      }

      const { id } = this.currentShortcut
      const showKeys = !this.trainedIds.includes(id) && !this.learnedIds.includes(id)

      return showKeys
    },

    level() {
      return this.$db.level(this.$route.params.level)
    },

    app() {
      return this.$db.app(this.$route.params.id)
    },

    shortcuts() {
      return this.app.shortcutsByLevel(this.level.level)
    },

    untrainedShortcuts() {
      return this.shortcuts
        .filter(shortcut => !this.trainedIds.includes(shortcut.id))
        .filter(shortcut => !this.learnedIds.includes(shortcut.id))
        // .filter(shortcut => !this.failedIds.includes(shortcut.id))
    },

    trainedShortcuts() {
      return this.trainedIds.map(id => this.shortcuts.find(shortcut => shortcut.id === id))
    },

    learnedShortcuts() {
      return this.learnedIds.map(id => this.shortcuts.find(shortcut => shortcut.id === id))
    },

    failedShortcuts() {
      return this.failedIds.map(id => this.shortcuts.find(shortcut => shortcut.id === id))
    },

    started() {
      return !!this.currentShortcut
    },
  },

  methods: {
    setShortcut() {
      const data = [
        {
          shortcuts: this.shortcuts,
          weight: 10,
        },
        {
          shortcuts: this.trainedShortcuts,
          weight: 20,
        },
        {
          shortcuts: this.learnedShortcuts,
          weight: 10,
        },
        {
          shortcuts: this.failedShortcuts,
          weight: 50,
        },
      ]
        .map(item => ({
          ...item,
          shortcuts: item.shortcuts
            .filter(shortcut => (this.currentShortcut ? shortcut.id !== this.currentShortcut.id : true)),
        }))
        .filter(item => item.shortcuts.length)

      const shortcuts = collect(data).pluck('shortcuts').toArray()
      const weights = collect(data).pluck('weight').toArray()
      const weightedShortcuts = weighted(shortcuts, weights)

      this.currentShortcut = collect(weightedShortcuts)
      // .filter(shortcut => {
      //   console.log(this.currentShortcut)
      //   if (weightedShortcuts.length > 1 && this.currentShortcut) {
      //     return shortcut.id !== this.currentShortcut.id
      //   }

        //   return true
        // })
        .random()
    },

    start() {
      this.next()
    },

    next() {
      this.setShortcut()
    },

    fail() {
      this.stop()
    },

    stop() {
      // this.$router.push({ name: 'app.levels' })
    },

    finish() {
      // this.$router.push({ name: 'apps' })
    },

    addToTrainedIds(id) {
      this.trainedIds = collect(this.trainedIds).push(id).unique().toArray()
      this.failedIds = this.failedIds.filter(failedId => failedId !== id)
    },

    addToLearnedIds(id) {
      this.learnedIds = collect(this.learnedIds).push(id).unique().toArray()
      this.trainedIds = this.trainedIds.filter(trainedId => trainedId !== id)
    },

    addToFailedIds(id) {
      this.failedIds = collect(this.failedIds).push(id).unique().toArray()
      this.trainedIds = this.trainedIds.filter(trainedId => trainedId !== id)
    },
  },

  mounted() {
    this.keyboard.on('update', ({ keys }) => {
      if (!this.started || this.timeout) {
        return
      }

      this.pressedKeys = keys
    })

    this.keyboard.on('shortcut', ({ event, keys }) => {
      if (!this.started || this.timeout) {
        return
      }

      console.log(keys, this.currentShortcut.resolvedKeys)

      this.pressedKeys = keys
      event.preventDefault()
      const match = this.keyboard.is(this.currentShortcut.resolvedKeys)
      const { id } = this.currentShortcut

      if (match) {
        // this.success = true
        // this.timeout = setTimeout(() => {
        //   this.next()
        // }, 1000)
        if (this.showKeys) {
          this.addToTrainedIds(id)
        } else {
          this.addToLearnedIds(id)
        }
        this.next()
      } else {
        this.addToFailedIds(id)
        this.next()
      }
    })

    this.start()
  },

  beforeDestroy() {
    this.keyboard.destroy()
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
