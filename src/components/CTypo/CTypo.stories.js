import CTypo from './index.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Components/CTypo',
  component: CTypo,
  tags: ['autodocs'],
  argTypes: {
    tag: { control: 'text', defaultValue: 'text' },
    highlight: { control: 'boolean', defaultValue: false },
    text: { control: 'text' }
  }
}

export const Text = {
  args: {
    tag: 'text',
    text: 'text'
  }
}

export const TextHighlight = {
  args: {
    tag: 'text',
    text: 'text',
    highlight: true
  }
}

export const MainTitle = {
  args: {
    tag: 'main-title',
    text: 'main title'
  }
}

export const MainTitleHighlight = {
  args: {
    tag: 'main-title',
    text: 'main title',
    highlight: true
  }
}

export const SecondaryTitle = {
  args: {
    tag: 'secondary-title',
    text: 'secondary title'
  }
}

export const SecondaryTitleHighlight = {
  args: {
    tag: 'secondary-title',
    text: 'secondary title',
    highlight: true
  }
}

export const Hint = {
  args: {
    tag: 'hint',
    text: 'hint'
  }
}

export const HintHighlight = {
  args: {
    tag: 'hint',
    text: 'hint',
    highlight: true
  }
}
