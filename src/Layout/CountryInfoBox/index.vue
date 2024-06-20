<template>
  <CCard class="country-info-box">
    <template #header>
      <CTypo tag="secondary-title" :text="country.name" />
    </template>

    <div class="country-info-box__content">
      <div class="country-info-box__grid">
        <div
          class="country-info-box__grid__item"
          v-for="info in infosToDisplay"
          :key="country.iso + info.label"
        >
          <CTypo tag="text" :text="info.label" />

          <CTypo tag="secondary-title" :text="info.value" highlight />
        </div>
      </div>

      <CTypo tag="hint"> Última atualização: {{ formatDate(country.last_update) }} </CTypo>
    </div>
  </CCard>
</template>

<script>
export default { name: 'CountryInfoBox' }
</script>

<script setup>
import { computed } from 'vue'
import CCard from '@/components/CCard'
import CTypo from '@/components/CTypo'

import { defineProps } from 'vue'

const { country } = defineProps({
  country: { type: Object, required: true }
})

const formatNumber = (number) => {
  return new Intl.NumberFormat('pt-BR').format(number)
}

const formatPercentage = (number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  }).format(number)
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}

const infosToDisplay = computed(() => {
  const formatedConfirmedNumber = formatNumber(country.confirmed)
  const formatedDeathsNumber = formatNumber(country.deaths)
  const fatalityRate = formatPercentage(country.fatality_rate)

  return [
    { label: 'Total de casos', value: formatedConfirmedNumber },
    { label: 'Mortes', value: formatedDeathsNumber },
    { label: 'Fatalidade', value: fatalityRate }
  ]
})
</script>

<style lang="scss">
.country-info-box {
  @at-root .c-card {
    &__header {
      margin-bottom: 1rem;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    &__item {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
      padding: 10px;

      @include Desktop {
        &:nth-child(even) {
          border-left: 2px solid $border;
          border-right: 2px solid $border;
        }
      }
    }
  }
}
</style>
