import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CCard from './index.vue'

describe('CCard.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(CCard, {
      slots: {
        default: '<div class="slot-content">Content</div>',
        header: '<div class="header-content">Header</div>'
      }
    })
    expect(wrapper.find('.slot-content').exists()).toBe(true)
    expect(wrapper.find('.slot-content').text()).toBe('Content')
  })

  it('renders header slot content', () => {
    const wrapper = mount(CCard, {
      slots: {
        header: '<div class="header-content">Header</div>'
      }
    })
    expect(wrapper.find('.header-content').exists()).toBe(true)
    expect(wrapper.find('.header-content').text()).toBe('Header')
  })
})
