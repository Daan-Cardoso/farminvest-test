<template>
  <header class="c-header">
    <figure class="c-header__logo">
      <img class="c-header__logo__image" src="/src/assets/images/logo.png" alt="Logo Covidômetro" />
    </figure>
  </header>
</template>

<script>
export default {
  name: 'CHeader'
}
</script>

<style lang="scss" scoped>
.c-header {
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;

  &__logo {
    align-items: center;
    display: flex;
    @include isContainer;

    &__image {
      object-fit: cover;
    }
  }
}
</style>
