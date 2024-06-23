import CTransition from './CTransition.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Components/CTransition',
  component: CTransition,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', defaultValue: 'slide-fade' },
    isGroup: { control: 'boolean', defaultValue: false },
    showItem: { control: 'boolean', defaultValue: true }
  }
}

const Template = (args) => ({
  components: { CTransition },
  setup() {
    return { args }
  },
  template: `<CTransition :name="args.name" :is-group="args.isGroup">
      <p v-if="args.showItem">Transition body</p>
    </CTransition>`
})

export const Transition = Template.bind({})
Transition.args = {
  name: 'slide-fade',
  isGroup: false,
  showItem: true
}

const GroupTemplate = (args) => ({
  components: { CTransition },
  setup() {
    return { args }
  },
  template: `<CTransition :name="args.name" :is-group="args.isGroup">
    <ul v-if="args.showItem">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </CTransition>`
})

export const TransitionGroup = GroupTemplate.bind({})
TransitionGroup.args = {
  name: 'slide-fade',
  isGroup: true,
  showItem: true
}
