<template>
  <CCard :class="['card-info', { 'card-info--use-hover': useHover }]">
    <template #header>
      <CTypo tag="secondary-title" :text="item.name" />
    </template>

    <div class="card-info__content">
      <div class="card-info__grid">
        <div
          class="card-info__grid__item"
          v-for="info in infosToDisplay"
          :key="(item.iso || item.name) + info.label"
        >
          <CTypo tag="text" :text="info.label" />

          <CTypo tag="secondary-title" :text="info.value" highlight />
        </div>
      </div>
    </div>
  </CCard>
</template>

<script>
export default { name: 'CardInfo' }
</script>

<script setup>
import { computed } from 'vue'
import CCard from '@/components/CCard'
import CTypo from '@/components/CTypo'
import { formatNumber, formatPercentage } from '@/utils/formatNumbers'

import { defineProps } from 'vue'

const { item } = defineProps({
  item: { type: Object, required: true },
  useHover: { type: Boolean, default: false }
})

const infosToDisplay = computed(() => {
  const formatedConfirmedNumber = formatNumber(item.confirmed)
  const formatedDeathsNumber = formatNumber(item.deaths)
  const fatalityRate = formatPercentage(item.fatality_rate)

  return [
    { label: 'Total de casos', value: formatedConfirmedNumber },
    { label: 'Mortes', value: formatedDeathsNumber },
    { label: 'Fatalidade', value: fatalityRate }
  ]
})
</script>

<style lang="scss">
.card-info {
  &--use-hover {
    cursor: pointer;

    &:hover {
      background-color: rgba($light, 0.3);
    }
  }

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
