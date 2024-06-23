import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CLoading from './index.vue'
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

describe('CLoading.vue', () => {
  it('renders CCard and v-icon components correctly', () => {
    const wrapper = mount(CLoading, templateGlobalComponent)

    expect(wrapper.findComponent({ name: 'CCard' }).exists()).toBe(true)

    const svgIcon = wrapper.find('.ov-icon')

    expect(svgIcon.exists()).toBe(true)
  })
})
