<template>
  <div class="sets">
    <set
      v-for="set in sets"
      :key="set.id"
      :app="app"
      :set="set"
    />
  </div>
</template>

<script>
import Set from '@/components/Set'

export default {
  components: {
    Set,
  },

  props: {
    app: {
      required: true,
      type: Object,
    },

    sets: {
      default: () => ([]),
      type: Array,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
