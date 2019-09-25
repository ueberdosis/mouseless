<template>
  <div class="levels">
    <div class="swiper-container" ref="slider">
      <div class="swiper-wrapper levels__items">
        <level
          class="swiper-slide"
          v-for="(level, index) in app.levels"
          :key="level.level"
          :app="app"
          :level="level"
          :is-active="slider && slider.activeIndex === index"
          @click.native="slider.slideTo(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Level from '@/components/Level'

export default {
  components: {
    Level,
  },

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
        speed: 600,
        width: 1, // why
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
