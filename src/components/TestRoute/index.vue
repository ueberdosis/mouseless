<template>
  <page :title="app.title" :subtitle="set.title">
    <template v-slot:left>
      <btn icon="arrow-left" @click.native="goBack">
        Sets
      </btn>
    </template>
    <template v-slot>
      <div class="test-route">
        <transition name="shortcut" mode="out-in">
          <div
            class="test-route__content"
            :class="{ 'is-failed': isFailed }"
            v-if="started"
            :key="testId"
          >
            <div class="test-route__title">
              {{ currentShortcut.title }}
            </div>

            <div class="test-route__description" v-if="currentShortcut.description">
              {{ currentShortcut.description }}
            </div>

            <div class="test-route__keys">
              <template v-if="isTest && !testFailed">
                <div class="test-route__key-set">
                  <key
                    v-for="(key, index) in currentShortcut.resolvedKeys"
                    :key="index"
                    :name="key"
                    :is-test="true"
                    :is-active="success"
                    :is-success="success"
                    :show-result="success"
                  />
                </div>
              </template>
              <template v-else-if="isTest && testFailed">
                <div class="test-route__key-set">
                  <key
                    v-for="(key, index) in failedResolvedKeys"
                    :key="index"
                    :name="key"
                    :is-test="false"
                    :is-active="true"
                    :is-success="currentShortcut.resolvedKeys.includes(key)"
                    :show-result="true"
                  />
                </div>
                <div class="test-route__key-set">
                  <key
                    v-for="(key, index) in currentShortcut.resolvedKeys"
                    :key="index"
                    :name="key"
                    :is-test="false"
                    :is-active="pressedResolvedKeys.includes(key) || success"
                    :is-success="success"
                    :show-result="success"
                  />
                </div>
              </template>
              <template v-else>
                <key
                  v-for="(key, index) in currentShortcut.resolvedKeys"
                  :key="index"
                  :name="key"
                  :is-test="false"
                  :is-active="pressedResolvedKeys.includes(key) || success"
                  :is-success="success"
                  :show-result="success"
                />
              </template>
            </div>
          </div>
        </transition>

        <div class="test-route__footer">
          <set-progress
            :learned-count="learnedIds.length"
            :count="shortcuts.length"
          />
        </div>
      </div>
    </template>
  </page>
</template>

<script>
import uuidv4 from 'uuid/v4'
import weighted from 'weighted'
import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'
import Btn from '@/components/Btn'
import Key from '@/components/Key'
import Page from '@/components/Page'
import SetProgress from '@/components/SetProgress'

export default {
  components: {
    Btn,
    Key,
    Page,
    SetProgress,
  },

  data() {
    return {
      success: false,
      isFailed: false,
      testFailed: false,
      timeout: null,
      keyboard: new Keyboard(),
      pressedResolvedKeys: [],
      failedResolvedKeys: [],
      run: null,
      trainedIds: [],
      learnedIds: [],
      currentShortcut: null,
      testId: uuidv4(),
      isTest: false,
    }
  },

  computed: {
    isTraining() {
      return !this.isTest
    },

    app() {
      return this.$db.app(this.$route.params.appId)
    },

    set() {
      return this.app.set(this.$route.params.setId)
    },

    shortcuts() {
      return this.app.shortcutsBySet(this.$route.params.setId)
    },

    unseenShortcuts() {
      return this.shortcuts
        .filter(shortcut => !this.trainedIds.includes(shortcut.id))
        .filter(shortcut => !this.learnedIds.includes(shortcut.id))
    },

    trainedShortcuts() {
      return this.trainedIds.map(id => this.shortcuts.find(shortcut => shortcut.id === id))
    },

    learnedShortcuts() {
      return this.learnedIds.map(id => this.shortcuts.find(shortcut => shortcut.id === id))
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
      if (!this.shortcutSet.length) {
        this.stop()
        return
      }

      const shortcuts = collect(this.shortcutSet).pluck('shortcuts').toArray()
      const weights = collect(this.shortcutSet).pluck('weight').toArray()
      const weightedShortcuts = weighted(shortcuts, weights)

      this.currentShortcut = collect(weightedShortcuts).random()
    },

    start() {
      this.next()
    },

    next() {
      this.testId = uuidv4()
      this.testFailed = false
      this.success = false
      this.pressedResolvedKeys = []
      this.failedResolvedKeys = []

      this.run.update({
        trainedIds: this.trainedIds,
        learnedIds: this.learnedIds,
      })

      if (this.finished) {
        this.run.finish()
        this.stop()
      } else {
        this.setShortcut()
        const { id } = this.currentShortcut
        this.isTest = this.trainedIds.includes(id) || this.learnedIds.includes(id)
      }
    },

    fail() {
      this.stop()
    },

    stop() {
      this.$router.push({ name: 'app.sets' })
    },

    addToTrainedIds(id) {
      this.trainedIds = collect(this.trainedIds).push(id).unique().toArray()
      this.learnedIds = this.learnedIds.filter(learnedId => learnedId !== id)
    },

    addToLearnedIds(id) {
      this.learnedIds = collect(this.learnedIds).push(id).unique().toArray()
      this.trainedIds = this.trainedIds.filter(trainedId => trainedId !== id)
    },

    setupRun() {
      const existingRun = collect(this.$db.runs)
        .where('appId', this.app.id)
        .where('setId', this.set.id)
        .where('finishedAt', '===', null)
        .sortByDesc('createdAt')
        .first()

      if (existingRun) {
        this.run = existingRun
      } else {
        this.run = this.$db.createRun({
          appId: this.app.id,
          setId: this.set.id,
        })
      }

      this.trainedIds = [] // don't restore trained ids
      this.learnedIds = this.run.learnedIds
    },

    startFailedAnimation() {
      this.isFailed = true
      this.failedTimeout = setTimeout(() => {
        this.isFailed = false
      }, 500)
    },

    goBack() {
      this.$router.push({ name: 'app.sets' })
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

    this.keyboard.on('shortcut', event => {
      if (!this.started || this.timeout) {
        return
      }

      event.preventDefault()
      this.pressedResolvedKeys = this.keyboard.resolvedKeys

      console.log({
        pressed: this.keyboard.resolvedKeys,
        expected: this.currentShortcut.resolvedKeys,
      })

      if (this.keyboard.is(this.currentShortcut.resolvedKeys)) {
        const { id } = this.currentShortcut
        this.success = true

        if (this.isTest && !this.testFailed) {
          this.addToLearnedIds(id)
        } else {
          this.addToTrainedIds(id)
        }

        this.timeout = setTimeout(() => {
          this.timeout = null
          this.next()
        }, 1000)

        return
      }

      if (this.isTraining) {
        this.startFailedAnimation()
        return
      }

      if (this.isTest) {
        this.startFailedAnimation()

        if (!this.testFailed) {
          this.failedResolvedKeys = this.pressedResolvedKeys
          this.pressedResolvedKeys = []
          this.testFailed = true
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
