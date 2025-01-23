import { defineNuxtPlugin } from '#app'
import clickOutsideDirective from './clickOutsideDirective'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('click-outside', clickOutsideDirective)
})
