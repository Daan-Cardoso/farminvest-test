<template>
  <label class="c-sort">
    <CTypo tag="text" :text="label" />

    <div class="c-sort__wrapper">
      <div
        :class="['c-sort__field', { 'c-sort__field--opened': isOpened }]"
        @click.stop="toggleDropdown"
      >
        <CTypo tag="text" :text="selectedOptionText" />
      </div>

      <div class="c-sort__toggle-order" @click.stop="toggleOrder">
        <v-icon
          :class="[
            'c-sort__toggle-order__icon--asc',
            { 'c-sort__toggle-order__icon--active': isAscending }
          ]"
          name="md-arrowdropdown-round"
        />
        <v-icon
          :class="[
            'c-sort__toggle-order__icon',
            { 'c-sort__toggle-order__icon--active': !isAscending }
          ]"
          name="md-arrowdropdown-round"
        />
      </div>

      <ul class="c-sort__dropdown" v-if="isOpened">
        <li
          class="c-sort__dropdown__item"
          v-for="option in options"
          :key="option.value"
          @click.stop="selectOption(option)"
        >
          <CTypo tag="text" :text="option.text" />
        </li>
      </ul>
    </div>
  </label>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import CTypo from '@/components/CTypo/CTypo.vue'

const isOpened = ref(false)
const selectedOption = ref(null)
const isAscending = ref(true)

const { options } = defineProps({
  label: { type: String, default: 'Ordenar por' },
  options: { type: Array, required: true },
  modelValue: { type: Object, default: () => ({ key: 'name', order: 'asc' }) }
})

const emit = defineEmits(['update:modelValue'])

const toggleDropdown = () => {
  isOpened.value = !isOpened.value
}

const toggleOrder = () => {
  isAscending.value = !isAscending.value
  emit('update:modelValue', {
    key: selectedOption.value?.value,
    order: isAscending.value ? 'asc' : 'desc'
  })
}

const selectOption = (option) => {
  selectedOption.value = option
  isOpened.value = false
  emit('update:modelValue', { key: option.value, order: isAscending.value ? 'asc' : 'desc' })
}

const selectedOptionText = computed(() => {
  return selectedOption.value ? selectedOption.value.text : 'Nome'
})

emit('update:modelValue', { key: 'name', order: 'asc' })
</script>

<style lang="scss">
.c-sort {
  align-items: center;
  display: flex;
  gap: 1rem;
  user-select: none;
  width: 100%;
  max-width: 400px;

  &__field {
    align-items: center;
    background: $white;
    border-radius: 6px;
    border: 1px solid $font;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    padding: 0.25rem;
    width: 100%;
    position: relative;

    > .c-typo {
      padding: 0.5rem;
    }

    &--opened {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-color: transparent;
    }
  }

  &__wrapper {
    position: relative;
    z-index: 1;
    min-width: 120px;
    width: 100%;
    max-width: 270px;
    box-sizing: border-box;
  }

  &__dropdown {
    background: $white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid $font;
    border-top-color: transparent;
    gap: 0.5rem;
    padding: 0.25rem;
    position: absolute;
    width: 100%;

    &__item {
      cursor: pointer;
      padding: 0.5rem;
      border-top: 1px solid $border;
      transition: background-color 0.3s;

      &:hover {
        background: rgba($primary, 0.2);
      }
    }
  }

  &__toggle-order {
    background: none;
    flex-direction: column;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    position: absolute;
    right: -0.25rem;
    top: 50%;
    transform: translateY(-50%);

    &__icon {
      color: $font;
      transform: translateY(-8px);

      &--active {
        color: $primary;
      }

      &--asc {
        transform: rotate(180deg) translateY(-6px);
      }
    }
  }
}
</style>
