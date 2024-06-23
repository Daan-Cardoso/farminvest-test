import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CTypo from './index.vue'

describe('CTypo.vue', () => {
  it('renders default text content', () => {
    const wrapper = mount(CTypo, {
      props: {
        text: 'Default Text'
      }
    })

    expect(wrapper.find('.c-typo').exists()).toBe(true)
    expect(wrapper.find('p.c-typo').exists()).toBe(true)

    expect(wrapper.text()).toContain('Default Text')
  })

  it('renders with different tag and highlight', async () => {
    const wrapper = mount(CTypo, {
      props: {
        tag: 'main-title',
        highlight: true,
        text: 'Main Title'
      }
    })

    expect(wrapper.find('.c-typo').exists()).toBe(true)
    expect(wrapper.find('h1.c-typo').exists()).toBe(true)

    expect(wrapper.text()).toContain('Main Title')

    expect(wrapper.classes()).toContain('c-typo--highlight')
  })

  it('renders with tag hint and no text', async () => {
    const wrapper = mount(CTypo, {
      props: {
        tag: 'hint'
      }
    })

    expect(wrapper.find('.c-typo').exists()).toBe(true)
    expect(wrapper.find('h2.c-typo').exists()).toBe(true)

    expect(wrapper.text()).toBe('')
  })
})
