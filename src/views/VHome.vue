<template>
  <main class="view-home">
    <div class="container">
      <HeroBanner />

      <section class="card-grid">
        <SearchBox @search="handleSearch" />

        <template v-if="filtredCountries.length">
          <CountryInfoBox v-for="country in filtredCountries" :key="country.iso" :country />
        </template>
        <template v-else-if="isFetched">
          <CTypo tag="text" text="Nenhum país encontrado" />
        </template>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import SearchBox from '@/Layout/SearchBox'
import HeroBanner from '@/Layout/HeroBanner'
import CountryInfoBox from '@/Layout/CountryInfoBox'
import CTypo from '@/components/CTypo'
import { useCountryStore } from '@/stores/Country'
import { filterCountries } from '@/helpers/searchHelpers'

const { init } = useCountryStore()
const isFetched = ref(false)

const countries = ref([])
const searchValue = ref('')

const filtredCountries = computed(() => {
  return filterCountries(countries.value, {
    search: searchValue.value,
    sortBy: 'confirmed'
  })
})

const handleSearch = async (value) => {
  searchValue.value = value
}

onBeforeMount(async () => {
  const [, data] = await init()

  countries.value = data
  isFetched.value = true
})
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
