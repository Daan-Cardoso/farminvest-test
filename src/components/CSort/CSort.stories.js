import CSort from './CSort.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Components/CSort',
  component: CSort,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array' },
    value: { control: 'object', defaultValue: { key: 'name', order: 'asc' } },
    label: { control: 'text', defaultValue: 'Ordenar por' }
  }
}

export const Default = {
  args: {
    options: [
      { text: 'Nome', value: 'name' },
      { text: 'Total de Casos', value: 'confirmed' },
      { text: 'Mortes', value: 'deaths' },
      { text: 'Taxa de Fatalidade', value: 'fatality_rate' }
    ],
    value: { key: 'name', order: 'asc' }
  }
}
