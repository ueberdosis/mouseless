<template>
  <div class="groups">
    <group
      v-for="group in groups"
      :key="group.id"
      :app="app"
      :group="group"
    />
  </div>
</template>

<script>
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

    groups: {
      default: () => ([]),
      type: Array,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
