<template>
  <div class="c-card">
    <header class="c-card__header" v-if="$slots.header">
      <slot name="header" />
    </header>

    <div class="c-card__content" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.c-card {
  width: 100%;
  border-radius: 6px;
  border: 2px solid #f8f7f7;
  padding: 30px;
}
</style>
