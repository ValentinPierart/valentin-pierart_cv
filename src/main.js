import { createApp } from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Locales from './lang'

createApp(App).mount('#app')

App.use(VueI18n)

// set lang
let path = window.location.pathname.split('/')
if (path.length > 1 && path[1] === 'fr') {
  App.config.lang = path[1]
} else {
  App.config.lang = 'en'
}

// set locales
Object.keys(Locales).forEach(function (lang) {
  App.locale(lang, Locales[lang])
})

