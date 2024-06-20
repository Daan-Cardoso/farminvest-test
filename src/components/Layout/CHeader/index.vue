<template>
  <header class="c-header">
    <figure class="c-header__logo container">
      <img class="c-header__logo__image" src="/src/assets/images/logo.png" alt="Logo Covidômetro" />
    </figure>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.c-header {
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;

  &__logo {
    align-items: center;
    display: flex;

    &__image {
      object-fit: cover;
    }
  }
}
</style>
