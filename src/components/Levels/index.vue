<template>
  <div class="levels">
    <div class="swiper-container" ref="slider">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper levels__items">
        <!-- Slides -->
        <button
          class="swiper-slide levels__item"
          type="button"
          @click="slider.slideTo(index)"
          v-for="(level, index) in app.levels"
          :key="level.level"
          :to="{ name: 'app.test', params: { level: level.level } }"
        >
          <div class="levels__card">
            <div class="levels__title">
              {{ level.title }}
            </div>
            <div>
              {{ app.shortcutsByLevel(level.level).length }} Shortcuts
            </div>
            <router-link
              class="levels__button"
              :to="{ name: 'app.test', params: { level: level.level } }"
            >
              Test
            </router-link>
          </div>
        </button>
      </div>

      <!-- If we need navigation buttons
      <div class="swiper-button-prev">
        prev
      </div>
      <div class="swiper-button-next">
        next
      </div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  props: {
    app: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      slider: null,
    }
  },

  methods: {
    initSlider() {
      this.slider = new Swiper(this.$refs.slider, {
        init: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        mousewheel: true,
      })

      this.slider.init()
      this.slider.snapGrid = [...this.slider.slidesGrid]
    },
  },

  mounted() {
    this.initSlider()
  },
}
</script>

<style src='swiper/css/swiper.css'></style>

<style lang="scss" src="./style.scss" scoped></style>
