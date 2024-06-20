<template>
  <component :is="componentTag" :class="['c-typo', classModifiers]">
    <slot v-if="$slots.default || text">
      {{ text }}
    </slot>
  </component>
</template>

<script>
export default {
  name: 'CTypo'
}
</script>

<script setup>
import { computed } from 'vue'

const { tag, highlight } = defineProps({
  tag: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'main-title', 'secondary-title'].includes(value)
  },
  highlight: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})

const componentTag = computed(() => {
  return tag === 'text' ? 'p' : tag === 'main-title' ? 'h1' : 'h2'
})

const classModifiers = computed(() => {
  return {
    'c-typo--highlight': highlight,
    [tag]: true
  }
})
</script>

<style lang="scss">
$tags-style-map: (
  text: (
    font-size: 1rem,
    font-weight: 400,
    letter-spacing: 0.5px
  ),
  main-title: (
    font-size: 3.125rem,
    font-weight: 700,
    letter-spacing: 0.5px
  ),
  secondary-title: (
    font-size: 1.5rem,
    font-weight: 700,
    letter-spacing: 0.5px
  )
);

.c-typo {
  color: $font;

  @each $tag, $style in $tags-style-map {
    &.#{$tag} {
      line-height: 1;
      font-size: map-get($style, font-size);
      font-weight: map-get($style, font-weight);
      letter-spacing: map-get($style, letter-spacing);
    }
  }

  &--highlight {
    color: $primary;
  }
}
</style>
