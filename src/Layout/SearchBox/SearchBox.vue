<template>
  <CCard class="search-box">
    <template #header>
      <CTypo tag="secondary-title" :text="title" />
    </template>

    <CInput :placeholder="placeholder" type="search" v-debounce="handleSearch" />

    <CSort :options="sortOptions" v-model="sort" />
  </CCard>
</template>

<script setup>
import { defineModel, watch } from 'vue'
import CCard from '@/components/CCard/CCard.vue'
import CInput from '@/components/CInput/CInput.vue'
import CTypo from '@/components/CTypo/CTypo.vue'
import CSort from '@/components/CSort/CSort.vue'

defineProps({
  sortOptions: { type: Array, required: true },
  placeholder: { type: String, default: 'Pesquisar' },
  title: { type: String, default: 'Filtrar dados' }
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
