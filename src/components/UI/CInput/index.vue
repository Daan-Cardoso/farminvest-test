<template>
  <label class="c-input">
    <span class="c-input__label" v-if="label">
      {{ label }} <em class="c-input__label__required">{{ $attrs.required ? '*' : '' }}</em>
      {{ $attrs.readonly ? '(somente leitura)' : '' }}
    </span>

    <div :class="['c-input__field', classModifiers]">
      <template v-if="type === 'search'">
        <v-icon class="c-input__field__search-icon" name="md-search" />
      </template>

      <input
        class="c-input__field__raw"
        v-bind="inputAttrs"
        :type="type === 'password' && showPassword ? 'text' : type"
        v-model="value"
      />

      <template v-if="type === 'password'">
        <v-icon
          :key="showPassword"
          :name="showPassword ? 'md-lockoutline' : 'md-lockopen'"
          @click="toggleShowPassword"
          class="c-input__field__toggle-password"
        />
      </template>
    </div>

    <span class="c-input__error" v-if="!!error">
      {{ error }}
    </span>
  </label>
</template>

<script setup>
import { defineModel, useAttrs, defineOptions, computed, ref } from 'vue'
import { filterAttributes } from '@/helpers/formHelpers'

const { error } = defineProps({
  label: { type: String, required: false },
  mask: { type: String, required: false },
  type: { type: String, default: 'text' },
  error: { type: String, required: false }
})

defineOptions({ inheritAttrs: false })

const $attrs = useAttrs()
const value = defineModel()
const showPassword = ref(false)

const classModifiers = computed(() => {
  return {
    'c-input__field--has-error': !!error
  }
})

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const inputAttrs = filterAttributes($attrs, ['type', 'class', 'required', 'validation'])
</script>

<style lang="scss">
.c-input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  max-width: 600px;

  @include Desktop {
    gap: 0.5rem;
  }

  &__label {
    color: black;
    display: block;
    font-size: 0.8rem;
    letter-spacing: -0.4px;
    flex-shrink: 0;

    @include Desktop {
      font-size: 1rem;
    }

    &__required {
      font-size: 1rem;
      color: red;
    }
  }

  &__field {
    border-bottom: 1px solid black;
    width: 100%;
    background: white;
    transition: border-color 0.3s;

    &:focus-within {
      border-color: $primary;

      .c-input__field__search-icon {
        color: $primary;
      }
    }

    &--has-error {
      border-color: red;
    }

    &__raw {
      border-radius: inherit;
      border: none;
      box-sizing: border-box;
      padding: 10px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    &:has(&__toggle-password) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .c-input__field__raw {
        width: calc(100% - 30px);
      }
    }

    &:has(&__search-icon) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .c-input__field__raw {
        width: calc(100% - 16px);
      }
    }

    &__toggle-password {
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin-right: 10px;
      color: $primary;

      &:hover {
        opacity: 0.8;
      }
    }

    &__search-icon {
      width: 16px;
      color: black;
      transition: color 0.3s;
    }
  }

  &__error {
    color: red;
    font-size: 0.8rem;
    letter-spacing: -0.4px;
  }
}
</style>
