<template>
  <header class="main-header">
    <figure class="main-header__logo">
      <img
        class="main-header__logo__image"
        src="/src/assets/images/logo.png"
        alt="Logo Covidômetro"
      />
    </figure>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
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
