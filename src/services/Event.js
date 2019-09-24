import Vue from 'vue'

export default new class {

  constructor() {
    this.vue = new Vue()
  }

  emit(event, ...data) {
    this.vue.$emit(event, ...data)
  }

  on(event, callback) {
    this.vue.$on(event, callback)
  }

  off(event, callback) {
    this.vue.$off(event, callback)
  }

}()
