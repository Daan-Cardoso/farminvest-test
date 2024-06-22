import { setup } from '@storybook/vue3'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as MdIcons from 'oh-vue-icons/icons/md'

addIcons(...Object.values(MdIcons))

setup((app) => {
  app.component('v-icon', OhVueIcon)
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
