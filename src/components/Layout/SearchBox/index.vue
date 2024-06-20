<template>
  <CCard class="search-box">
    <template #header>
      <CTypo tag="secondary-title" text="Filtrar dados sobre um pais" />
    </template>

    <CInput placeholder="Digite o nome do pais" type="search" v-debounce="handleSearch" />
  </CCard>
</template>

<script>
export default { name: 'SearchBox' }
</script>

<script setup>
import CCard from '@/components/UI/CCard'
import CInput from '@/components/UI/CInput'
import CTypo from '@/components/UI/CTypo'

const emit = defineEmits(['search'])

const handleSearch = (value) => {
  emit('search', value)
}
</script>

<style lang="scss">
.search-box {
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
