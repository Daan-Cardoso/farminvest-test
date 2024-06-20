<template>
  <main class="view-home">
    <div class="container">
      <HeroBanner />

      <section class="card-grid">
        <SearchBox @search="handleSearch" />
      </section>
    </div>
  </main>
</template>

<script setup>
import SearchBox from '@/Layout/SearchBox'
import HeroBanner from '@/Layout/HeroBanner'

const handleSearch = (value) => {
  console.log('vhome', value)
}
</script>

<style lang="scss">
.view-home {
  background: radial-gradient(circle at top left, $light 40%, $white 50%);
  min-height: 100vh;

  .container {
    padding: 1rem;
    @include isContainer;
  }

  .card-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(300px, 790px);
    gap: 1rem;
  }
}
</style>
