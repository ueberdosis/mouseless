<template>
  <div class="groups">
    <div class="swiper-container" ref="slider">
      <div class="swiper-wrapper groups__items">
        <group
          class="swiper-slide"
          v-for="(group, index) in app.groups"
          :key="group.id"
          :app="app"
          :group="group"
          :is-active="slider && slider.activeIndex === index"
          :animate="animate"
          @click.native="slider.slideTo(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Group from '@/components/Group'

export default {
  components: {
    Group,
  },

  props: {
    app: {
      required: true,
      type: Object,
    },

    animate: {
      default: false,
      type: Boolean,
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
