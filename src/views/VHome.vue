<template>
  <main class="view-home">
    <div class="container">
      <HeroBanner />

      <section class="card-grid">
        <SearchBox @search="handleSearch" />

        <template v-if="[].length > 0">
          <CountryInfoBox v-for="country in []" :key="country.iso" :country />
        </template>
        <template v-else>
          <CountryInfoBox :country="country" />
          <!-- <CTypo tag="text" text="No countries found" /> -->
        </template>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import SearchBox from '@/Layout/SearchBox'
import HeroBanner from '@/Layout/HeroBanner'
import CountryInfoBox from '@/Layout/CountryInfoBox'
// import CTypo from '@/components/CTypo'

const country = ref({
  name: 'Brasil',
  iso: 'BRA',
  confirmed: 37076053,
  deaths: 699276,
  fatality_rate: 0.0189,
  last_update: '2021-09-23T00:00:00Z'
})

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
