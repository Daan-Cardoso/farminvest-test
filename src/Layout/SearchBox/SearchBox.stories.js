import SearchBox from './SearchBox.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Layouts/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  argTypes: {
    sortOptions: {
      control: 'array',
      defaultValue: [
        { text: 'Nome', value: 'name' },
        { text: 'Total de Casos', value: 'confirmed' },
        { text: 'Mortes', value: 'deaths' },
        { text: 'Taxa de Fatalidade', value: 'fatality_rate' }
      ]
    },
    placeholder: { control: 'text', defaultValue: 'Search by country name' },
    title: { control: 'text', defaultValue: 'Search' }
  }
}

export const Default = {
  args: {
    sortOptions: [
      { text: 'Nome', value: 'name' },
      { text: 'Total de Casos', value: 'confirmed' },
      { text: 'Mortes', value: 'deaths' },
      { text: 'Taxa de Fatalidade', value: 'fatality_rate' }
    ],
    placeholder: 'Search by country name',
    title: 'Search'
  }
}
