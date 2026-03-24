import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router' // routerオブジェクトをインポート

// routerをアプリケーションに組み込む
createApp(App).use(router).mount('#app')
