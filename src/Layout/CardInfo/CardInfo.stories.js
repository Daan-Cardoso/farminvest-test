import CardInfo from './index.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Layouts/CardInfo',
  component: CardInfo,
  tags: ['autodocs'],
  argTypes: {
    item: { control: 'object' },
    useHover: { control: 'boolean' }
  }
}

export const Default = {
  args: {
    item: {
      name: 'Name Example',
      confirmed: 777,
      deaths: 777,
      fatality_rate: 0.0777
    }
  }
}

export const UseHover = {
  args: {
    item: {
      name: 'Name Example',
      confirmed: 777,
      deaths: 777,
      fatality_rate: 0.0777
    },
    useHover: true
  }
}
