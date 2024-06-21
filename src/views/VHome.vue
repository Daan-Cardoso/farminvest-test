<template>
  <main class="view-home">
    <div class="container">
      <HeroBanner />

      <section class="card-grid">
        <SearchBox @search="handleSearch" :sortOptions="sortOptions" @sort="handleSort" />

        <template v-if="filtredCountries.length">
          <CountryInfoBox v-for="country in filtredCountries" :key="country.iso" :country />
        </template>

        <template v-else-if="initialized">
          <CTypo tag="text" text="Nenhum país encontrado" />
        </template>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import SearchBox from '@/layout/SearchBox'
import HeroBanner from '@/layout/HeroBanner'
import CountryInfoBox from '@/layout/CountryInfoBox'
import CTypo from '@/components/CTypo'
import { useCountryStore } from '@/stores/countryStore'
import { filterCountries } from '@/utils/filterCountries'
import { storeToRefs } from 'pinia'

const countryStore = useCountryStore()
const { countries, initialized } = storeToRefs(countryStore)
const searchValue = ref('')
const sortBy = ref({ key: 'name', order: 'asc' })

const sortOptions = [
  { text: 'Nome', value: 'name' },
  { text: 'Total de Casos', value: 'confirmed' },
  { text: 'Mortes', value: 'deaths' },
  { text: 'Taxa de Fatalidade', value: 'fatality_rate' }
]

const filtredCountries = computed(() => {
  return filterCountries(countries.value, {
    search: searchValue.value,
    sortBy: sortBy.value
  })
})

const handleSearch = async (value) => {
  searchValue.value = value
}

const handleSort = async (value) => {
  sortBy.value.key = value.key
  sortBy.value.order = value.order
}

onBeforeMount(async () => {
  await countryStore.init()
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
