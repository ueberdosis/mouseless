<template>
  <div class="sets">
    <set-item
      v-for="set in sets"
      :key="set.id"
      :app="app"
      :set="set"
    />
  </div>
</template>

<script>
import SetItem from '@/components/Set'

export default {
  name: 'Sets',

  components: {
    SetItem,
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
