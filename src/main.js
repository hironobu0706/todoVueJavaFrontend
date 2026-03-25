import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router' // routerオブジェクトをインポート
import { createPinia } from 'pinia' // pinia使用のため

// routerをアプリケーションに組み込む
createApp(App).use(router).use(createPinia()).mount('#app')
