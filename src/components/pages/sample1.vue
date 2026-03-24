<script setup>
// import { ref } from 'vue'
// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'
// import axios from 'axios'
import axios from 'axios'

function sample() {
  // GETリクエスト（通信）
  const url = axios.get("http://localhost:8080/api/sample")
    // thenで成功した場合の処理
    .then(() => {
      console.log("ステータスコード:", status);
    })
    // catchでエラー時の挙動を定義
    .catch(err => {
      console.log("err:", err);
    });
}

</script>

<template>
    sample1.vue
    <button @click="sample">リクエスト</button>
</template>
