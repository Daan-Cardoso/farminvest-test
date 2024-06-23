import CCard from './CCard.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Components/CCard',
  component: CCard,
  tags: ['autodocs']
}

const Template = () => ({
  components: { CCard },
  template: `<CCard>
    <template v-slot:header>
      <h3>Card Title</h3>
    </template>
    <p>Card body</p>
  </CCard>`
})

export const Default = Template.bind({})
