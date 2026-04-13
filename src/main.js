import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router' // routerオブジェクトをインポート
import { createPinia } from 'pinia' // pinia使用のため

import 'vuetify/styles'
// import '@mdi/font/css/materialdesignicons.css' // おそらくssrを使うとき必要
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ 
  components, 
  directives, 
  icons: { 
    defaultSet: 'mdi', 
    aliases, 
    sets: { 
      mdi, 
    }, 
  }, 
}) 

// routerをアプリケーションに組み込む
createApp(App).use(router).use(vuetify).use(createPinia()).mount('#app')
