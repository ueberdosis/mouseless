<template>
  <page>
    <!-- <template v-slot:left>
      <router-link class="hover-button" :to="{ name: 'app.groups' }">
        ← Groups
      </router-link>
    </template> -->
    <template v-slot:center>
      {{ app.title }}
      <span style="opacity: 0.5">
        {{ group.title }}
      </span>
    </template>
    <template v-slot>
      <div class="test-route">
        <transition name="shortcut" mode="out-in">
          <div
            class="test-route__content"
            :class="{ 'is-failed': isFailed }"
            v-if="started"
            :key="currentShortcut.id"
          >
            <div class="test-route__title">
              {{ currentShortcut.title }}
            </div>

            <div class="test-route__description" v-if="currentShortcut.description">
              {{ currentShortcut.description }}
            </div>

            <div class="test-route__keys">
              <key
                v-for="(key, index) in currentShortcut.resolvedKeys"
                :key="index"
                :name="key"
                :is-pressed="pressedResolvedKeys.includes(key)"
                :is-ghost="isTest && !success"
              />
            </div>
          </div>
        </transition>

        <div class="test-route__footer">
          <div class="test-route__progress">
            {{ learnedIds.length }} / {{ shortcuts.length }}
          </div>
          <button class="test-route__cancel" type="button" @click="stop">
            Stop
          </button>
        </div>
      </div>
    </template>
  </page>
</template>

<script>
import weighted from 'weighted'
import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'
import Key from '@/components/Key'
import Page from '@/components/Page'

export default {
  components: {
    Key,
    Page,
  },

  data() {
    return {
      success: false,
      isFailed: false,
      timeout: null,
      keyboard: new Keyboard(),
      pressedResolvedKeys: [],
      run: null,
      trainedIds: [],
      learnedIds: [],
      failedIds: [],
      currentShortcut: null,
    }
  },

  computed: {
    isTest() {
      if (!this.started) {
        return false
      }

      const { id } = this.currentShortcut
      const isTest = this.trainedIds.includes(id) || this.learnedIds.includes(id)

      return isTest
    },

    isTraining() {
      return !this.isTest
    },

    app() {
      return this.$db.app(this.$route.params.appId)
    },

    group() {
      return this.app.group(this.$route.params.groupId)
    },

    shortcuts() {
      return this.app.shortcutsByGroup(this.$route.params.groupId)
    },

    unseenShortcuts() {
      return this.shortcuts
        .filter(shortcut => !this.trainedIds.includes(shortcut.id))
        .filter(shortcut => !this.learnedIds.includes(shortcut.id))
        .filter(shortcut => !this.failedIds.includes(shortcut.id))
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

    finished() {
      return this.learnedIds.length && this.learnedIds.length === this.shortcuts.length
    },

    shortcutSet() {
      const data = [
        {
          shortcuts: this.trainedShortcuts,
          weight: 50,
        },
        {
          shortcuts: this.learnedShortcuts,
          weight: 10,
        },
        {
          shortcuts: this.failedShortcuts,
          weight: 70,
        },
        {
          shortcuts: this.unseenShortcuts,
          weight: 90,
        },
      ]

      return data
        .map(item => ({
          ...item,
          shortcuts: item.shortcuts
            .filter(shortcut => {
              if (item.shortcuts.length > 1 && this.currentShortcut) {
                return shortcut.id !== this.currentShortcut.id
              }

              return true
            }),
        }))
        .filter(item => item.shortcuts.length)
    },
  },

  methods: {
    setShortcut() {
      const shortcuts = collect(this.shortcutSet).pluck('shortcuts').toArray()
      const weights = collect(this.shortcutSet).pluck('weight').toArray()
      const weightedShortcuts = weighted(shortcuts, weights)

      this.currentShortcut = collect(weightedShortcuts).random()
    },

    start() {
      this.next()
    },

    next() {
      this.success = false
      this.pressedResolvedKeys = []

      this.run.update({
        trainedIds: this.trainedIds,
        learnedIds: this.learnedIds,
        failedIds: this.failedIds,
      })

      if (this.finished) {
        this.run.finish()
        this.stop()
      } else {
        this.setShortcut()
      }
    },

    fail() {
      this.stop()
    },

    stop() {
      this.$router.push({ name: 'app.groups' })
    },

    addToTrainedIds(id) {
      this.trainedIds = collect(this.trainedIds).push(id).unique().toArray()
      this.failedIds = this.failedIds.filter(failedId => failedId !== id)
      this.learnedIds = this.learnedIds.filter(learnedId => learnedId !== id)
    },

    addToLearnedIds(id) {
      this.learnedIds = collect(this.learnedIds).push(id).unique().toArray()
      this.trainedIds = this.trainedIds.filter(trainedId => trainedId !== id)
      this.failedIds = this.failedIds.filter(failedId => failedId !== id)
    },

    addToFailedIds(id) {
      this.failedIds = collect(this.failedIds).push(id).unique().toArray()
      this.learnedIds = this.learnedIds.filter(learnedId => learnedId !== id)
      this.trainedIds = this.trainedIds.filter(trainedId => trainedId !== id)
    },

    setupRun() {
      const existingRun = collect(this.$db.runs)
        .where('appId', this.app.id)
        .where('groupId', this.group.id)
        .where('finishedAt', '===', null)
        .sortByDesc('createdAt')
        .first()

      if (existingRun) {
        this.run = existingRun
      } else {
        this.run = this.$db.createRun({
          appId: this.app.id,
          groupId: this.group.id,
        })
      }

      this.trainedIds = [] // don't restore trained ids
      this.learnedIds = this.run.learnedIds
      this.failedIds = this.run.failedIds
    },

    startFailedAnimation() {
      this.isFailed = true
      this.failedTimeout = setTimeout(() => {
        this.isFailed = false
      }, 500)
    },
  },

  created() {
    this.setupRun()
  },

  mounted() {
    this.keyboard.on('update', () => {
      if (!this.started || this.timeout) {
        return
      }

      this.pressedResolvedKeys = this.keyboard.resolvedKeys
    })

    this.keyboard.on('shortcut', ({ event }) => {
      if (!this.started || this.timeout) {
        return
      }

      console.log({
        pressed: this.keyboard.resolvedKeys,
        expected: this.currentShortcut.resolvedKeys,
      })

      this.pressedResolvedKeys = this.keyboard.resolvedKeys
      event.preventDefault()
      const success = this.keyboard.is(this.currentShortcut.resolvedKeys)
      const { id } = this.currentShortcut

      if (success) {
        console.log('jep')
        this.success = true
        this.timeout = setTimeout(() => {
          this.timeout = null
          if (this.isTest) {
            this.addToLearnedIds(id)
          } else {
            this.addToTrainedIds(id)
          }
          this.next()
        }, 1000)
      } else {
        console.log('nope')
        if (this.isTraining) {
          this.startFailedAnimation()
        } else {
          this.addToFailedIds(id)
          this.next()
        }
      }
    })

    this.start()
  },

  beforeDestroy() {
    clearTimeout(this.timeout)
    this.keyboard.destroy()
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
