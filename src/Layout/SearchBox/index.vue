<template>
  <CCard class="search-box">
    <template #header>
      <CTypo tag="secondary-title" text="Filtrar dados sobre um pais" />
    </template>

    <CInput
      placeholder="Digite o nome do pais ex: Brazil"
      type="search"
      v-debounce="handleSearch"
    />

    <CSort :options="sortOptions" v-model="sort" />
  </CCard>
</template>

<script>
export default { name: 'SearchBox' }
</script>

<script setup>
import { defineModel, watch } from 'vue'
import CCard from '@/components/CCard'
import CInput from '@/components/CInput'
import CTypo from '@/components/CTypo'
import CSort from '@/components/CSort'

defineProps({
  sortOptions: { type: Array, required: true }
})

const sort = defineModel()
const emit = defineEmits(['search', 'sort'])

const handleSearch = (value) => {
  emit('search', value)
}

watch(sort, (value) => {
  emit('sort', value)
})
</script>

<style lang="scss">
.search-box {
  @at-root .c-card {
    &__header {
      margin-bottom: 1rem;
    }

    &__content {
      gap: 1rem;
    }
  }
}
</style>
