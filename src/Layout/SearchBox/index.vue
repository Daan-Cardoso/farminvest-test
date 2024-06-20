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
import CCard from '@/components/CCard'
import CInput from '@/components/CInput'
import CTypo from '@/components/CTypo'

const emit = defineEmits(['search'])

const handleSearch = (value) => {
  emit('search', value)
}
</script>

<style lang="scss">
.search-box {
  @at-root .c-card {
    &__header {
      margin-bottom: 1rem;
    }
  }
}
</style>
