import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CTransition from './CTransition.vue'

describe('CTransition.vue', () => {
  it('renders CTransition with single item', async () => {
    const wrapper = mount(CTransition, {
      props: {
        name: 'slide-fade',
        isGroup: false
      },
      slots: {
        default: '<p>Transition body</p>'
      }
    })

    expect(wrapper.find('[name="slide-fade"]').exists()).toBe(true)

    expect(wrapper.find('p').exists()).toBe(true)
    expect(wrapper.find('p').text()).toBe('Transition body')
  })

  it('renders CTransition with group of items', async () => {
    const wrapper = mount(CTransition, {
      props: {
        name: 'slide-fade',
        isGroup: true
      },
      slots: {
        default: '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'
      }
    })

    expect(wrapper.find('[name="slide-fade"]').exists()).toBe(true)

    const listItems = wrapper.findAll('ul li')
    expect(listItems.length).toBe(3)
    expect(listItems[0].text()).toBe('Item 1')
    expect(listItems[1].text()).toBe('Item 2')
    expect(listItems[2].text()).toBe('Item 3')
  })
})
