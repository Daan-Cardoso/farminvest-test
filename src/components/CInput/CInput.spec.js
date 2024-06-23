import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CInput from './CInput.vue'
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

describe('CInput.vue', () => {
  it('renders input element', () => {
    const wrapper = mount(CInput, templateGlobalComponent)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('emits input event on user input', async () => {
    const wrapper = mount(CInput, templateGlobalComponent)
    const input = wrapper.find('input')

    await input.setValue('Hello')
    expect(wrapper.vm.value).toBe('Hello')
  })
})
