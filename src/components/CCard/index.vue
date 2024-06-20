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

<script>
export default { name: 'CCard' }
</script>

<script setup></script>

<style lang="scss">
.c-card {
  border-radius: 6px;
  border: 2px solid $border;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  background-color: $white;
  z-index: 0;

  @include Tablet {
    padding: 30px;
  }

  &__header {
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
