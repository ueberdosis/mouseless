<template>
  <div class="page">
    <div class="page__header">
      <div class="page__left" v-if="$scopedSlots.left">
        <slot name="left" />
      </div>
      <div class="page__center" v-if="$scopedSlots.center">
        <slot name="center" />
      </div>
      <div class="page__right" v-if="$scopedSlots.right">
        <slot name="right" />
      </div>
    </div>
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>
