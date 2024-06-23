<template>
  <component class="c-transition" :is="isGroup ? TransitionGroup : Transition" :name="name">
    <slot />
  </component>
</template>

<script setup>
import { Transition, TransitionGroup } from 'vue'
defineProps({
  name: { type: String, default: 'slide-fade' },
  isGroup: { type: Boolean, default: false }
})
</script>

<style lang="scss">
.slide-fade {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
