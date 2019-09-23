<template>
  <levels :app="app" />
</template>

<script>
import Levels from '@/components/Levels'

export default {
  components: {
    Levels,
  },

  computed: {
    app() {
      return this.$db.app(this.$route.params.id)
    },
  },
}
</script>
