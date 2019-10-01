<template>
  <div class="groups">
    <group
      v-for="group in app.groups"
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
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
