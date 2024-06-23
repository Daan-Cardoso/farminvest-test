import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CSort from './index.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as MdIcons from 'oh-vue-icons/icons/md'

addIcons(...Object.values(MdIcons))

const templateGlobalComponent = {
  global: {
    components: {
      'v-icon': OhVueIcon
    }
  }
}

describe('CSort.vue', () => {
  const options = [
    { value: 'name', text: 'Nome' },
    { value: 'date', text: 'Data' },
    { value: 'size', text: 'Tamanho' }
  ]

  it('renders CSort correctly with initial props', async () => {
    const wrapper = mount(CSort, {
      ...templateGlobalComponent,
      props: {
        label: 'Ordenar por',
        options: options,
        modelValue: { key: 'name', order: 'asc' }
      }
    })

    expect(wrapper.findComponent({ name: 'CTypo' }).exists()).toBe(true)
    expect(wrapper.find('.c-typo').text()).toContain('Ordenar por')

    const toggleIcons = wrapper.findAll('.ov-icon')
    expect(toggleIcons.length).toBe(2)

    expect(wrapper.find('.c-sort__dropdown').exists()).toBe(false)

    await wrapper.find('.c-sort__field').trigger('click')
    expect(wrapper.find('.c-sort__dropdown').exists()).toBe(true)

    await wrapper.findAll('.c-sort__dropdown__item')[1].trigger('click')
    expect(wrapper.find('.c-sort__dropdown').exists()).toBe(false)

    await wrapper.find('.c-sort__toggle-order').trigger('click')
    expect(wrapper.findAll('.c-sort__toggle-order__icon')[0].classes()).toContain(
      'c-sort__toggle-order__icon--active'
    )
  })
})
