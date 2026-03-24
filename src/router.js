
// まずはimport文でVueRouterから必要な関数などを用意する。
// ルーティングで割り当てるコンポーネント類も用意しておく。
import { createRouter, createWebHistory} from 'vue-router'
import sample1 from './components/pages/sample1.vue'
import sample2 from './components/pages/sample2.vue'
import HelloWorld from './components/HelloWorld.vue'

// メモ
// export 値 で、そのスクリプトファイルをimportした時に指定の値が取り出せるようになる。
// routerオブジェクトは、スクリプトを作成後、Vue3のアプリケーションに組み込む必要がある。
// このため、exportを使ってrouterオブジェクトが外部から利用できるようにする。
export const router = createRouter({
  // createRouterの引数のオブジェクトにhistoryとroutesという値を用意する
  history: createWebHistory(),
  routes: [
    {
      path: '/hello',             // 割り当てるパス
      name: '/hello',         // 名前
      component: HelloWorld, // 割り当てるコンポーネント
    },
    {
      path: '/sample1',             // 割り当てるパス
      name: 'sample1',         // 名前
      component: sample1, // 割り当てるコンポーネント
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: sample2,
    }
  ]
})
