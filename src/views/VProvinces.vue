<template>
  <main class="view-provinces">
    <div class="container">
      <section class="card-grid">
        <CTypo tag="text">
          <router-link :to="{ name: 'home' }">Voltar a lista de países</router-link>
        </CTypo>

        <SearchBox
          :sortOptions="sortOptions"
          @search="handleSearch"
          @sort="handleSort"
          placeholder="Pesquisar por nome de estado/província ex: São Paulo"
          title="Filtrar dados sobre um estado/província"
        />

        <TransitionGroup name="slide-fade">
          <template v-if="filtredProvinces.length">
            <InfoCard v-for="province in filtredProvinces" :key="province.name" :item="province" />
          </template>

          <template v-else-if="initialized">
            <CTypo tag="text" text="Nenhum estado/província encontrado" />
          </template>

          <template v-if="isLoading">
            <CLoading />
          </template>
        </TransitionGroup>
      </section>
    </div>
  </main>
</template>

<script setup>
import CLoading from '@/components/CLoading/CLoading.vue'
import CTypo from '@/components/CTypo/CTypo.vue'
import InfoCard from '@/layout/InfoCard/InfoCard.vue'
import SearchBox from '@/layout/SearchBox/SearchBox.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { filterCountries } from '@/utils/filterCovidData'
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/countryStore'
import { useRoute } from 'vue-router'

const countryStore = useCountryStore()
const { provinces, initialized, isLoading } = storeToRefs(countryStore)
const searchValue = ref('')
const sortBy = ref({ key: 'name', order: 'asc' })
const route = useRoute()

const sortOptions = [
  { text: 'Nome', value: 'name' },
  { text: 'Total de Casos', value: 'confirmed' },
  { text: 'Mortes', value: 'deaths' },
  { text: 'Taxa de Fatalidade', value: 'fatality_rate' }
]

const filtredProvinces = computed(() => {
  return filterCountries(provinces.value, {
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
  const country = route.params.country
  await countryStore.fetchCountry(country)
})
</script>

<style lang="scss">
.view-provinces {
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
