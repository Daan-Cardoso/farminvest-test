import CInput from './CInput.vue'
import '@/assets/scss/reset.scss'

export default {
  title: 'Components/CInput',
  component: CInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
    value: { control: 'text' }
  }
}

export const WithLabel = {
  args: {
    label: 'Label Example',
    placeholder: 'Placeholder Example',
    type: 'text'
  }
}

export const WithoutLabel = {
  args: {
    placeholder: 'Placeholder Example',
    type: 'text'
  }
}

export const Password = {
  args: {
    label: 'Label Example',
    placeholder: 'Placeholder Example',
    type: 'password'
  }
}

export const WithError = {
  args: {
    label: 'Label Example',
    placeholder: 'Placeholder Example',
    type: 'text',
    error: 'Error message'
  }
}
