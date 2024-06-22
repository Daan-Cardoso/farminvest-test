<template>
  <main class="view-home">
    <div class="container">
      <HeroBanner />

      <section class="card-grid">
        <SearchBox
          :sortOptions="sortOptions"
          @search="handleSearch"
          @sort="handleSort"
          title="Filtrar dados sobre um país"
          placeholder="Pesquisar por nome de país ex: Brazil"
        />

        <CTransition name="slide-fade" isGroup>
          <template v-if="filtredCountries.length">
            <CardInfo
              v-for="country in filtredCountries"
              :key="country.iso"
              :item="country"
              :useHover="country.hasProvincesInfo"
              @click="handleRedirect(country)"
            />
          </template>

          <template v-else-if="initialized">
            <CTypo tag="text" text="Nenhum país encontrado" />
          </template>

          <template v-else-if="isLoading">
            <CLoading />
          </template>
        </CTransition>
      </section>
    </div>
  </main>
</template>

<script setup>
import CLoading from '@/components/CLoading'
import CTransition from '@/components/CTransition'
import CTypo from '@/components/CTypo'
import CardInfo from '@/layout/CardInfo'
import HeroBanner from '@/layout/HeroBanner'
import SearchBox from '@/layout/SearchBox'
import { computed, onBeforeMount, ref } from 'vue'
import { filterCountries } from '@/utils/filterCovidData'
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/countryStore'
import { useRouter } from 'vue-router'

const countryStore = useCountryStore()
const router = useRouter()
const searchValue = ref('')
const sortBy = ref({ key: 'name', order: 'asc' })
const { countries, initialized, isLoading } = storeToRefs(countryStore)

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

const handleRedirect = (country) => {
  if (!country.hasProvincesInfo) return
  router.push({ name: 'provinces', params: { country: country.iso } })
}

onBeforeMount(async () => {
  if (countries.value.length) return
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
